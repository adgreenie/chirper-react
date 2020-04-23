import React, { useState, useEffect } from 'react'
import Chirp from './Chirp'
import { getAllChirps } from '../services/api-helper'
import { formatDate } from '../services/formatDate'
import '../App.css'


function Feed() {
    const [chirps, setChirps] = useState([])
    const [allChirps, setAllChirps] = useState([])

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getAllChirps()
            setChirps(resp)
            setAllChirps(chirps.map((chirp, index) => {
                return (
                    <>
                        <Chirp
                            key={index}
                            username={chirp.username}
                            body={chirp.body}
                            date={formatDate(chirp.date)}
                            numLikes={chirp.numLikes}
                            comments={chirp.comments}
                            id={chirp._id}
                        />
                    </>
                )
            }))
        }
        makeAPICall()
    }, [])

    return (
        <>
            <ul>
                {allChirps}
            </ul>
            <br />
            <br />
        </>
    )
}

export default Feed