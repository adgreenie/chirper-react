import React, { useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createUser } from '../services/api-helper'

function Sign() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")


    const handleUserName = e => {
        setUser(e.target.value)
        console.log("sign up username", e)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
        console.log('sign up password', e)
    }


    const handleCreateUser = e => {
        e.preventDefault()
        console.log(' Click when signing up', user + ' ' + password)
        const json = createUser([{
            "username": user,
            "password": password,
        }])
    }

    return (

        <>
            <Col>
                <Form onSubmit={handleCreateUser}>
                    <FormGroup>
                        <Label for="exampleEmail">Thank You For Joining Us!</Label>
                        <Input type="text"
                            name="email"
                            id="exampleEmail"
                            placeholder="Enter Your User Name"
                            onChange={handleUserName} value={user} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="password" name="text" id="exampleText" placeholder="Enter a Password"
                            onChange={handlePassword} value={password}
                        />

                    </FormGroup>
                    <Button color="info">Sign Up</Button>{' '}
                </Form>
            </Col>


        </>

    )
}

export default Sign
