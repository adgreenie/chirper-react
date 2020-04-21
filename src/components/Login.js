import React from 'react'
import { Link } from "react-router-dom"

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Login() {

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
                    <Link to='/feed'>
                        <Button>Login</Button>
                    </Link>

                </Col>
            </Col>


        </>
    )
}

export default Login