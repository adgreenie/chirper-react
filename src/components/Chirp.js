import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { deleteChirp, getChirpById, updateChirp } from '../services/api-helper'
import Comment from './Comment'
import { formatDate } from '../services/formatDate'


function Chirp({ chirp }) {

    const [deleted, setDeleted] = useState(false)
    const [liked, setLiked] = useState(false)
    const [numLikes, setNumLikes] = useState(chirp.numLikes)

    const date = formatDate(chirp.date)

    const comments = chirp.comments.map((comment, i) => {
        return (
            <li>
                <Comment key={i} id={comment} />
                
            </li>
        )
    })
    // console.log('chirpcomments',comments)


    const handleLike = () => {
        console.log('Chirp - handleLike - liked', liked)
        if (!liked) {
            chirp.numLikes++
            setNumLikes(chirp.numLikes)
            setLiked(true)
            updateChirp(chirp._id, chirp)
        }
    }

    const handleDelete = () => {
        console.log('Chirp - handleDelete - deleted', deleted)
        if (!deleted) {
            deleteChirp(chirp._id)
            setDeleted(true)
        }

    }

    return (
        <>
            {!deleted && <>

                <p id="name">{chirp.username}</p>
                <p>{chirp.body}</p>
                <p>Date: {date[0]}</p>
                <p>Time: {date[1]}</p>
                <p>
                    <button onClick={handleLike}>
                        <i className="fas fa-hand-spock"></i>
                    </button> {numLikes}
                </p>
                <button><FaTrash
                    onClick={handleDelete}
                /></button>

                <hr />
                <ul>
                    {comments}
                </ul>
                <hr />
            </>}
        </>
    )
}

export default Chirp