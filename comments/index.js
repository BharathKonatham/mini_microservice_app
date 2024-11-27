
import express from 'express'
import { randomBytes } from 'crypto'
import bodyParser from 'body-parser'
import cors from 'cors'
import axios from 'axios'

const app = express()
app.use(cors())
app.use(bodyParser.json())

const commentsByPostId = {
    
}

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostId[req.params.id] || [])
})


app.post('/posts/:id/comments', async (req,res)=>{
  const commentId = randomBytes(4).toString('hex');
  const {content} = req.body
  const comments = commentsByPostId[req.params.id] || []; // if the post has 0 comments returns empty array for the comment 
  comments.push({id:commentId, content, status:'pending'}) //creating comment by pushing the comment object into the comments objects with propery as post id
  commentsByPostId [req.params.id] = comments
  console.log(req.params.id)

  await axios.post('http://localhost:4005/events',{
    type:'CommentCreated',
    data:{
      id:commentId,
      content,
      postId: req.params.id
    } 
  })
  comments.forEach(comment => {
    comment.content = comment.status === 'pending' && 'Pending moderation';
  });
  console.log(comments)
  res.status(201).send(comments)
})

app.post('/events',(req,res)=>{
  console.log('Received Event',req.body.type)
  res.send({})
})

app.listen(4001,()=>{
    console.log('listening on port 4001')
})