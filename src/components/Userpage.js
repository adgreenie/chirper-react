import React, { useEffect, useState } from 'react'
import {
  Card, Col, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Row
} from 'reactstrap'
import Chirp from './Chirp'
import { getUserByUsername, getChirpsByUsername } from '../services/api-helper'

function Userpage(props) {
  const [user, setUser] = useState([]);
  const [chirps, setChirps] = useState([]);
  const username = props.match.params.user;

  useEffect(() => {
    const makeAPICall = async () => {
      const userResp = await getUserByUsername(username);
      const chirpResp = await getChirpsByUsername(username);
      setUser(userResp);
      setChirps(chirpResp);
    };
    username ? makeAPICall() : setUser(false);
  }, []);

  const userChirps = chirps ? chirps.map((chirp, index) => {
    return <Chirp key={index} chirp={chirp} />;
  }) : ''

  return (
    <>
      {user && (
        <div>
          <Col>
            <Card body outline color="warning">
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{user.username}</CardTitle>
                <CardSubtitle>
                  Followers : {user.followers} Following : {user.following}
                </CardSubtitle>
                <CardText>User ID : {user._id}</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Row></Row>
            <Card body outline color="danger">
              {userChirps}
            </Card>
          </Col>
        </div>
      )}
    </>
  );
}

export default Userpage;