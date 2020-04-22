import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { deleteChirp, getChirpById, updateChirp } from '../services/api-helper'
import Comment from './Comment'

function Chirp(props) {

    const [deleted, setDeleted] = useState(false)
    const [liked, setLiked] = useState(false)
    const [numLikes, setNumLikes] = useState(props.numLikes)

    const comments = props.comments.map((comment, i) => {
        return (
            <li>
                <Comment key={i} id={comment} />
            </li>
        )
    })

    const handleLike = async () => {
        console.log('Chirp - handleLike - liked', liked)
        if (!liked) {
            const chirp = await getChirpById(props.id)
            chirp.numLikes++
            setNumLikes(chirp.numLikes)
            updateChirp(props.id, chirp)
            setLiked(true)
        }
    }

    const handleDelete = () => {
        console.log('Chirp - handleDelete - deleted', deleted)
        if (!deleted) {
            deleteChirp(props.id)
            setDeleted(true)
        }
    }

    return (
        <>
            {!deleted && <>
                <p id="name">{props.username}</p>
                <p>{props.body}</p>
                <p>Date:{props.date[0]}</p>
                <p>Time:{props.date[1]}</p>
                <p>
                    <button onClick={handleLike}>
                        <i class="fas fa-hand-spock"></i>
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