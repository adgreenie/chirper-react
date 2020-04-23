import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { createChirp, createUser } from '../services/api-helper'

function ChirpForm() {

    const [username, setUserName] = useState("")
    const [chirp, setChirp] = useState([])

    const handleUserName = e => {
        setUserName(e.target.value)
        console.log('handle username', e)
    }

    const handleChirp = e => {
        setChirp(e.target.value)
        console.log('handle chirp', e)
    }

    const handleCreate = e => {
        e.preventDefault()
        console.log('returned json from click', username + chirp)
        const json = createChirp([{
            "username": username,
            "body": chirp
        }])
    }

    return (

        <Col>
            <Form onSubmit={handleCreate}>
                <FormGroup>
                    <Label for="exampleEmail">Chirp Away</Label>
                    <Input type="text"
                        name="email"
                        id="exampleEmail"
                        placeholder="User"
                        onChange={handleUserName} value={username} />
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


    )
}

export default ChirpForm