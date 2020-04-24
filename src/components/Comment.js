import React, { useEffect, useState } from 'react'
import { getCommentById } from '../services/api-helper'
import { formatDate } from '../services/formatDate'

function Comment({ id }) {
    const [comment, setComment] = useState('')
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getCommentById(id)
            setComment(resp.body)
            setDate(formatDate(resp.date))
            setName(resp.username)
            // console.log('getCommentById', resp)
        }
        makeAPICall()
    }, [])

    // console.log('chirpcommnets - ', id)

    return (
        <li>
            <h6>{date[2]}, {date[1]}</h6>
            <h6>{name}'s thoughts...</h6>
            <p> <i className="fa fa-comments"> {comment} </i> </p>
        </li>
    )
}

export default Comment