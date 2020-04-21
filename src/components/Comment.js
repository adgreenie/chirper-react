import React,{useEffect, useState} from 'react'
import {getCommentById} from '../services/api-helper'

function Comment({id}) {
    const [comment,setComment]= useState('')

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getCommentById(id)
            setComment(resp)
            console.log('getCommentById', resp)
        }
        makeAPICall()
    }, [])



    console.log('chirpcommnets - ', id)
   
    return (
        <div className="chirpStyle">
            <h6>    --user name</h6>
            <p>  {id} </p>
            <p>    --date</p>
        </div>
    )
    
}

export default Comment