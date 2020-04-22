import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Feed from './Feed'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Login(props) {
    const stopLogin = () => {
        // if({Login}) {
        //     result =<Feed ?></Feed>
        // }, else {  
        //     result = {Login}
        // }
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
                    <FormGroup>
                        <Input type="text" name="stat" id="exampleState" placeholder="
                User Name" />
                    </FormGroup>
                    <FormGroup>

                        <Input type="text" name="stat" id="exampleState" placeholder="Password" />
                    </FormGroup>
                    <Button onClick={handleSubmit}>
                    <Link to='/feed'>
                        Login {Feed}
                    </Link>
                    </Button>

                </Col>
            </Col>


        </>
    )
}

export default Login