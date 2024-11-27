import React from 'react'
import { useState } from 'react'
import './createComment.styles.css'
import axios from 'axios'
const CreateComment = ({postData,setCommentList}) => {
    const [comment,setComment] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(comment)
       const commentList = await axios.post(`http://localhost:4001/posts/${postData.id}/comments`,{
          "content":comment,
          
        })
        setCommentList(commentList.data)
        setComment('')
    }
    

  return (
    <div className='commentContainer'>
    
    <form onSubmit={handleSubmit}>
        <input className='commentInput' placeholder='Comment' 
        onChange={(e)=>setComment(e.target.value)} value={comment}
        />
        <button className='btn btn-secondary' disabled={comment.length === 0} >Submit</button>
    </form>
    </div>
  )
}

export default CreateComment
