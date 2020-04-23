import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { createComment } from '../services/api-helper'
import { formatDate } from '../services/formatDate';

function CommentForm() {

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")


    const handleUserName = e => {
        setName(e.target.value)
        console.log(" Commenter Name = ", e)
    }
    const handleComment = e => {
        setComment(e.target.value)
        console.log('Comment  body = ', e)
    }


    const handleCreateComment = e => {
        e.preventDefault()
        e.target.reset()
        console.log(' Click when signing up', name + ' ' + comment)
        const json = createComment([{
            "username": name,
            "body": comment,
        }])

    }

    return (

        <>
            <Col>
                <Form onSubmit={handleCreateComment}>
                    <FormGroup>
                        <Label for="Comment">What are you going to Comment?</Label>
                        <Input type="text"
                            name="username"
                            id="exampleUser"
                            placeholder="Enter Your User Name"
                            onChange={handleUserName} value={name} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="text" name="text" id="exampleText" placeholder="What is your comment?"
                            onChange={handleComment} value={comment}
                        />

                    </FormGroup>
                    <Button color="info">Add Comment</Button>{' '}
                </Form>
            </Col>


        </>

    )
}

export default CommentForm