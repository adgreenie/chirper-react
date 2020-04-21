import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { deleteChirp } from '../services/api-helper'
import Comment from './Comment'

function Chirp(props) {

    const [deleted, setDeleted] = useState(false)

    const comments = props.comments.map((comment, i) => {
        return (
            <li>
                <Comment key={i} id={comment} />
            </li>
        )
    })

    const handleDeleteChirp = async (id) => {
        console.log('this is getting clicked')
        const json = await deleteChirp(id)

        console.log('when clicked we get ', json)

        if (json.status === 'success') {
            setDeleted(true)
        }
    }

    return (
        <>
            { !deleted && <> 
                <p id="name">{props.username}</p>
                <p>{props.body}</p>
                <p>Date:{props.date}</p>
                <p><i class="fas fa-hand-spock"></i> {props.numLikes}</p>
                <FaTrash
                    onClick={() => handleDeleteChirp(props._id)}
                />
                <hr />
                <ul>
                    {comments}
                </ul>
                <hr />
            </> }
        </>
    )
}

export default Chirp