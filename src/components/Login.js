import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Feed from './Feed'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Login(props) {
    //
    //set state in order to get user info and password 
    
    // const stopLogin = () => {
    //     // if({Login}) {
    //     //     result =<Feed ?></Feed>
    //     // }, else {  
    //     //     result = {Login}
    //     // }
    // }
    const handleChange = (event) => {
        event.preventDefault();
        console.log('handling change!');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted!');
      }
    
    return (
        <>
            <br />
            <br />
            <Col>
                <Col>
                    <FormGroup onChange={handleChange}>
                        <Input type="text" name="stat" id="exampleState" placeholder="
                User Name" />
                    </FormGroup>
                    <FormGroup>

                        <Input type="text" name="stat" id="exampleState" placeholder="Password" />
                    </FormGroup>
                    <Button onClick={handleSubmit}>
                    <Link to='/feed'>
                        Login {Form}
                    </Link>
                    </Button>

                </Col>
            </Col>


        </>
    )
}

export default Login