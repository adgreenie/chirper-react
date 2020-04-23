import React, { useState } from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import { Col, Button, Form, FormGroup, Input } from "reactstrap";
// import { createUser } from '../services/api-helper'
function Login() {
  //
  //set state in order to get user info and password

  // const [userName, setUserName] = useState("");

  // const validateUser = (userName, Password) => {

  //   const [userName, setUserName] = useState({
  //     name: "",
  //     password: ""
  //   });
  // }




  // const handleChange = (event) => {
  //   event.preventDefault();
  //   console.log("handling change!");
  //   const user = event.target.value;
  //   setUserName(user);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Login - event", event);
  //   // validateUser()

  //   const handleChange = (e) => {
  //     e.preventDefault();
  //     const { name, value } = e.target;

  //     const userInput = e.target.value;
  //     console.log('userInput', userInput)
  //     setUserName({
  //       ...userName,
  //       // name is a variable, to show that it is a variable we tell JS to first get the value of the variable and replace the variable
  //       [name]: value

  //     })
  //   }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Login - userName", userName);

  //   };
  // }

  // console.log(userName)
  return (
    <>
      <br />
      <br />
      <Col>
        <Col>
          <Form>
            {/* <Form onSubmit={handleSubmit} > */}
            <FormGroup>
              <Input
                type="text"
                name="name"
                id="exampleState"
                placeholder="
                User Name"
              // onChange={handleChange}
              // value={userName.name}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="password"
                id="exampleState"
                placeholder="Password"
              // onChange={handleChange}
              // value={userName.password}
              />
            </FormGroup>
            <Button>
              Submit
            </Button>

          </Form>

        </Col>
      </Col>

    </>
  );
}

export default Login;
