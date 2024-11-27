import React, { useState } from 'react'
import './postItem.styles.css'
import CreateComment from './createComment.component'
import CommentList from './commentList.component'
const PostItem = ({postData}) => {
  const [commentList,setCommentList] = useState(postData.comments)
  // setCommentList(postData.comments)
  return (
    <div className='postDataContainer'>
      <h3>{postData.title}</h3>
      <CreateComment postData={postData} setCommentList={setCommentList}/>
      {commentList && <CommentList comments={commentList}/>}
    </div>
  )
}

export default PostItem
