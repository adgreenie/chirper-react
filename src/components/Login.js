import React, { useState } from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import { Col, Button, Form, FormGroup, Input } from "reactstrap";

function Login(props) {
  //
  //set state in order to get user info and password
  const [userName, setUserName] = useState("");

  const validateUser = (userName, Password) => {

  }

  const handleChange = (event) => {
    event.preventDefault();
    console.log("handling change!");
    const user = event.target.value;
    setUserName(user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login - event", event);
    // validateUser()
  };

  return (
    <>
      <br />
      <br />
      <Col>
        <Col>
          {/* <Form onSubmit={handleSubmit}> */}
          <FormGroup onSubmit={handleSubmit}>
            <Input
              type="text"
              name="stat"
              id="exampleState"
              placeholder="
                User Name"
              onChange={handleChange}
              value={userName}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="stat"
              id="exampleState"
              placeholder="Password"
            />
          </FormGroup>
          <Button type="submit" onClick={handleSubmit}>
            <Link to="/feed">Login {Form}</Link>
          </Button>

          {/* </Form> */}
        </Col>
      </Col>

    </>
  );
}

export default Login;
