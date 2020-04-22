import React, { useEffect, useState } from 'react'
import { getCommentById } from '../services/api-helper'
import { setDefaultBreakpoints } from 'react-socks'

function Comment({ id }) {
    const [comment, setComment] = useState('')
    const [username, setUsername] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getCommentById(id)
            setUsername(resp.username)
            setComment(resp.body)
            setDate(resp.date)
            console.log('getCommentById', resp)
        }
        makeAPICall()
    }, [])



    console.log('chirpcommnets - ', id)

    return (
        <div className="chirpStyle">
            <h6>   {username} is Commenting </h6>
            <p>  {comment} </p>
            <p>   {date}</p>
        </div>
    )

}

export default Comment