import React, { useState, useEffect } from 'react'
import Chirp from './Chirp'
import { getAllChirps } from '../services/api-helper'
import '../App.css'

function Feed() {
    const [chirps, setChirps] = useState([])

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getAllChirps()
            setChirps(resp)
            console.log('getallchirps', resp)

        }
        makeAPICall()
    }, [])


    const allChirps = chirps.map((chirp, index) => {
        return <Chirp key={index} chirp={chirp} />
    })

    return (
        <>
            <ul>
                {allChirps}
            </ul>
        </>
    )
}

export default Feed