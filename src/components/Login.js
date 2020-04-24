import React, { useState, useContext } from "react";
import Feed from "./Feed";
import { Col, Button, Form, FormGroup, Input } from "reactstrap";
import { getAllUsers, getUserByUsername, validateUser } from "../services/api-helper";
import { AppContext } from "../App";

function Login(props) {
  const app = useContext(AppContext);
  //set state in order to get user info and password
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleChangeName = username => {
    username.preventDefault();
    setUsername(username.target.value);
    console.log("username", username);
  };

  const handleChangePassword = (userPassword) => {
    userPassword.preventDefault();
    setUserPassword(userPassword.target.value);
    console.log("userPassword", userPassword);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (validateUser (username, userPassword)){
      const user = await getUserByUsername(username)
      app.setUser(user);
      console.log('user set');
      props.history.push(`/user/${username}`);
    }
  }

  return (
    <>
      <br />
      <br />
      <Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="name"
                id="exampleState"
                placeholder="
                User Name"
                onChange={handleChangeName}
                value= {username.name}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="exampleState"
                placeholder="Password"
                onChange={handleChangePassword}
                value={username.password}
              />
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </Col>
      </Col>
    </>
  );
}

export default Login;
