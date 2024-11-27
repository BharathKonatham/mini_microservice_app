import React, { useState } from 'react'
import './posts.styles.css'
import axios from 'axios'
const Posts = ({setPosts}) => {
    const [title,setTitle] = useState('')
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
       const res = await axios.post('http://localhost:4000/posts',
            {
                title
            }
        )
        setPosts(res.data)
        console.log(res.data)
        setTitle('')
    }
  return (
    <div className='form'>
        <form  onSubmit={handleSubmit}>
            <h1>Create posts</h1>
            <div className='form-group'>
                <label htmlFor='post'>Title</label>
                <input  name='post' className='form-control' onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <button className='btn btn-primary' disabled={title.length === 0}>Submit</button>
        </form>
    </div>
  )
}

export default Posts
