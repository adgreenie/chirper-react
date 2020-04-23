import React, { useState, useContext } from "react";
import Feed from "./Feed";
import { Col, Button, Form, FormGroup, Input } from "reactstrap";
import { getAllUsers, getUserByUsername } from '../services/api-helper'
import {AppContext} from '../App';

function Login() {
  const app = useContext(AppContext)
  //set state in order to get user info and password
  const[userName,setUserName] = useState('');
  const[userPassword,setUserPassword] = useState('');
  // const [userName, setUserName] = useState({
  //   name:"",
  //   password:""
  // });

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   const userInput = e.target.value;
  //   console.log('userInput',userInput)
  //   setUserName({
  //     ...userName,
  //     // name is a variable, to show that it is a variable we tell JS to first get the value of the variable and replace the variable
  //     [name]: value
  //   }) 
  // }

  const handleChangeName = userName => {
    userName.preventDefault();
    setUserName(userName.target.value)
    console.log("userName",userName)
  }

    const handleChangePassword = userPassword => {
      userPassword.preventDefault();
      setUserPassword(userPassword.target.value)
      console.log("userPassword",userPassword)
    }
  
    const handleSubmit= async e=>{
      e.preventDefault();
      if(validateUser({"username":userName,"password":userPassword})){
        const resp = await getUserByUsername(userName)
        app.setUser(resp)
      } 

      
      
      }

      
// console.log(userName)
  return (
    <>
      <br />
      <br />
      <Col>
        <Col>
        <Form onSubmit={handleSubmit} >
            <FormGroup>
              <Input
                type="text"
                name="name"
                id="exampleState"
                placeholder="
                User Name"
                onChange={handleChangeName}
                // value= {userName.name}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="password"
                id="exampleState"
                placeholder="Password"
                onChange={handleChangePassword}
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
