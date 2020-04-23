import React, { useState } from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import { Col, Button, Form, FormGroup, Input } from "reactstrap";

function Login() {
  //
  //set state in order to get user info and password
  const [userName, setUserName] = useState({
    name:"",
    password:""
  });
  console.log('proprs in login',props)
  //This was handleFormInputs
  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setUserName({
      ...userName,
      // i dont understand this step, how is name an array? 
      [name]: value
    })
  }

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   console.log("handling change!",props);
  //   const user = event.target.value;
  //   setUserName(user);
  // };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Login - e",e);
  };

  return (
    <>
      <br />
      <br />
      <Col>
        <Col>
        <Form onSubmit={e => handleSubmit(e)} >
            <FormGroup>
              <Input
                type="text"
                name="stat"
                id="exampleState"
                placeholder="
                User Name"
                onChange={handleChange}
                value={userName.name}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="stat"
                id="exampleState"
                placeholder="Password"
                onChange={handleChange}
                value={userName.password}
              />
            </FormGroup>
            <Button onClick={handleSubmit}>
              <Link to="/feed">Login {Form}</Link>
            </Button>
            
            </Form>
        </Col>
      </Col>
     
    </>
  );
}

export default Login;
