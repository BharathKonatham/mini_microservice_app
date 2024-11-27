import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import PostItem from './postItem.component'
import './postList.styles.css'
const PostList = ({initalPosts}) => {
    const [postList, setPostList] = useState(initalPosts)
    const fetchPosts = async ()=>{
      const posts = await axios.get('http://localhost:4002/posts')
     
      setPostList(posts.data)
    }
    useEffect(()=>{
        fetchPosts()
        
    },[initalPosts])
    const postsArray = Object.values(postList)
    
  return (
    <div  className='postlistContainer'>
        <h1>Posts</h1>
        <div className='postList'>
            {postsArray.map((post)=>(
                <PostItem key={post.id}postData ={post}/>
            )) }
        </div>
        
    </div>
  )
}

export default PostList
