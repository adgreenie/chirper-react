import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createUser } from '../services/api-helper'

function Sign() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [firstChirp, setFirstChirp] = useState("")

    const handleUserName = e => {
        setUser(e.target.value)
        console.log("sign up username", e)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
        console.log('sign up password', e)
    }
    const handleFirstChirp = e => {
        setFirstChirp(e.target.value)
        console.log('sign up chirp ', e)
    }

    const handleCreateUser = e => {
        e.preventDefault()
        console.log(' Click when signing up', user + ' ' + password)
        const json = createUser([{
            "username": user,
            "password": password,
            "body": firstChirp
        }])
    }

    return (

        <>
            <Col>
                <Form onSubmit={handleCreateUser}>
                    <FormGroup>
                        <Label for="exampleEmail">Thank For Joining Us!</Label>
                        <Input type="text"
                            name="email"
                            id="exampleEmail"
                            placeholder="Enter Your User Name"
                            onChange={handleUserName} value={user} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="text" name="text" id="exampleText" placeholder="Enter a Strong Password"
                            onChange={handlePassword} value={password}
                        />

                    </FormGroup>
                    <Button color="info">Sign Up</Button>{' '}
                </Form>
            </Col>

            {/* <div>
                <form>
                    <input type='text' onChange={handleUserName} value={user} placeholder='Pick Your User Name' ></input>
                    <input type='text' onChange={handlePassword} value={password} placeholder="Pick a Strong Password"></input>
                    <input type='text' onChange={handleFirstChirp} value={firstChirp} placeholder="Write your first Chrip"></input>
                    <button onClick={handleCreateUser}>Sign Up</button>
                </form>
            </div> */}
        </>

    )
}

export default Sign