import React from 'react'

const CommentList = ({comments}) => {
  return (
    <div>
    <ul>
    {comments.map((comment)=>(
       <li key={comment.id}>
        <h5 >{comment.content}</h5>
       </li> 
      ))}
    </ul>
      
    </div>
  )
}

export default CommentList
