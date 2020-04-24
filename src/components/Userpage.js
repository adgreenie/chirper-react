import React, { useEffect, useState, useContext } from 'react'
import { Card, CardImg, CardTitle, CardBody, Button } from 'reactstrap'
import Chirp from './Chirp'
import { getUserByUsername, getChirpsByUsername, updateUser } from '../services/api-helper'
import { AppContext } from "../App";
import { Link } from "react-router-dom";

function Userpage(props) {
  const app = useContext(AppContext);
  const visitor = app.user

  const [user, setUser] = useState([]);
  const [chirps, setChirps] = useState([]);
  const [isFollowed, setIsFollowed] = useState(false);

  const username = props.match.params.user;
  const isThisUser = (username === visitor.username)

  useEffect(() => {
    const makeAPICall = async () => {
      const userResp = await getUserByUsername(username);
      const chirpResp = await getChirpsByUsername(username);
      setUser(userResp);
      setChirps(chirpResp);
      if (visitor) {
        setIsFollowed(visitor.following.includes(user.username))
      }
    };
    username ? makeAPICall() : setUser(false);
  }, [username]);

  const userChirps = chirps ? chirps.map((chirp, index) => {
    return <Chirp key={index} chirp={chirp} />;
  }) : ''

  const followers = user.followers ? user.followers.map((follower, i) => {
    return (
      <li key={i}>
        <Link id="name" to={`/user/${follower}`}>
          {follower}
        </Link>
      </li>
    )
  }) : ''

  const following = user.following ? user.following.map((followed, i) => {
    return (
      <li key={i}>
        <Link id="name" to={`/user/${followed}`}>
          {followed}
        </Link>
      </li>
    )
  }) : ''

  const handleFollow = () => {
    user.followers.push(visitor.username)
    visitor.following.push(user.username)
    updateUser(user.username, user)
    updateUser(visitor.username, visitor)
    setIsFollowed(true)
  }

  const handleUnfollow = () => {
    user.followers.splice(user.followers.indexOf(visitor), 1)
    visitor.following.splice(visitor.followers.indexOf(user), 1)
    updateUser(user.username, user)
    updateUser(visitor.username, visitor)
    setIsFollowed(false)
  }

  return (
    <div className="userpage">
      <Card>
        <CardImg src={user.image} alt="User Image" />
        <CardBody className="flex-follow">
          <ul className="follow">Followers: {followers}</ul>
          <div>
            <CardTitle>{user.username}</CardTitle>
            {visitor && !isThisUser && (
              <Button
                onClick={!isFollowed ? handleFollow : handleUnfollow}
                color={!isFollowed ? "primary" : "success"}>
                {!isFollowed ? "Follow" : "Unfollow"} {user.username}
              </Button>
            )}
          </div>
          <ul className="follow">Following: {following}</ul>
        </CardBody>
      </Card>
      <ul>{userChirps}</ul>
    </div>
  );
}

export default Userpage;