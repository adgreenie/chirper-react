import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createUser } from '../services/api-helper'

function Sign() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [firstChirp, setFirstChirp] = useState("")

    const handleUserName = e => {
        setUser(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleFirstChirp = e => {
        setFirstChirp(e.target.value)
    }

    const handleCreateUser = async () => {

        const json = await createUser({
            "username": user,
            "pwd": password,
            "body": firstChirp
        })
    }

    return (
        <>
            {/* <Form>
                <Col>
                    <Col>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail"></Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Select a Username" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword"></Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Enter a Password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleAddress"></Label>
                            <Input type="text" name="address" id="exampleAddress" placeholder="Paste a valid Image URL" />
                        </FormGroup>
                        <Button>Sign in</Button>
                    </Col>
                </Col>
            </Form> */}
            <div>
                <form>
                    <input type='text' onChange={handleUserName} value={user} placeholder='Pick Your User Name' ></input>
                    <input type='text' onChange={handlePassword} value={password} placeholder="Pick a Strong Password"></input>
                    <input type='text' onChange={handleFirstChirp} value={firstChirp} placeholder="Write your first Chrip"></input>
                    <button onClick={handleCreateUser}>Sign Up</button>
                </form>
            </div>
        </>

    )
}

export default Sign