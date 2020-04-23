import React, { useEffect, useState } from 'react'
import {
    Card, Col, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Row
} from 'reactstrap';
import { getUserByUsername } from '../services/api-helper';

function Userpage(props) {
  const [user, setUser] = useState([]);
  const [noUser, setNoUser] = useState(false);
  const username = props.match.params.user;

  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getUserByUsername(username);
      setUser(resp);
    };
    username ? makeAPICall() : setNoUser(true);
  }, []);

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
              {/*put chirps here*/}
            </Card>
          </Col>
        </div>
      )}
    </>
  );
}

export default Userpage