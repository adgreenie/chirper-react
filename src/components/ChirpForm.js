import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { createChirp, createUser } from '../services/api-helper'

function ChirpForm() {

    const [username, setUserName] = useState("")
    const [chirp, setChirp] = useState([])
    const [newuser, setNewUser] = useState("")

    let handleUserName = e => {
        setUserName(e.target.value)
        console.log('handle username', e)
        setNewUser(e.target.value)
    }



    const handleChirp = e => {
        setChirp(e.target.value)
        console.log('handle chirp', e)
    }

    const handleCreate = async e => {
        e.preventDefault()

        console.log('returned json from click', username + chirp)
        const resp = await createUser({
            "username": username
        })
        const json = await createChirp([{
            "username": newuser,
            "body": chirp
        }])

    }




    return (
        <Col>
            <Col>
                <Form onSubmit={handleCreate}>
                    <FormGroup>
                        <Label for="exampleEmail">Chirp Away</Label>
                        <Input type="text"
                            name="email"
                            id="exampleEmail"
                            placeholder="User"
                            onChange={handleUserName}
                            value={username} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="textarea" name="text" id="exampleText" placeholder="Chirp Here"
                            onChange={handleChirp} value={chirp}
                        />
                    </FormGroup>
                    <Button color="warning">Chirp IT out</Button>{' '}
                </Form>
            </Col>
        </Col>


    )
}

export default ChirpForm