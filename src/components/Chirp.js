import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { deleteChirp, getChirpById, updateChirp } from '../services/api-helper'
import Comment from './Comment'
import { formatDate } from '../services/formatDate'
import CommentForm from './CommentForm'
import { Navbar, NavbarBrand, Button, UncontrolledPopover, PopoverBody } from "reactstrap";


function Chirp({ chirp }) {

    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

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


                <button
                    id="Popover1"
                    type="button"
                >Add Comment
                    <UncontrolledPopover
                        trigger="legacy"
                        placement="top"
                        isOpen={popoverOpen}
                        target="Popover1"
                        toggle={toggle}
                    >
                        <PopoverBody>
                            <CommentForm />
                        </PopoverBody>
                    </UncontrolledPopover>
                </button>




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