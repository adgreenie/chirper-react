import React, { useEffect, useState } from 'react'
import {
    Card, Col, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Row
} from 'reactstrap';
import { getUserByUsername } from '../services/api-helper';

function Userpage({ username }) {

    const [user, setUser] = useState([])

    useEffect(() => {
        const makeAPICall = async () => {
            // const resp = await getUserByUsername(username)
            const resp = 'adam'
            setUser(resp)
        }
        makeAPICall()
    }, [])

    return ( <>
        <Col>
            <Card body outline color="warning">
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{user.username}</CardTitle>
                    <CardSubtitle>Followers : {user.followers}  Following : {user.following}</CardSubtitle>
                    <CardText>User ID : {user._id}</CardText>
                </CardBody>
            </Card>
        </Col>
        <Col>
            <Row></Row>
            <Card body outline color='danger'>
                {/*put chirps here*/}
            </Card>
        </Col>
    </> )
}

export default Userpage