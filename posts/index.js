import express from 'express'
import { randomBytes } from 'crypto'
import bodyParser from 'body-parser'
import cors from 'cors'
import axios from 'axios'

const app = express()
app.use(cors())
app.use(bodyParser.json())
const posts = {}

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/posts',async (req,res)=>{
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts[id] = {
        id,
        title
    } 
    await axios.post('http://localhost:4005/events',{
        type:'PostCreated',
        data:{
            id,
            title
        }
    })
    res.status(201).send(posts)
})
app.post('/events',(req,res)=>{
    console.log('Received Event',req.body.type)
    res.send({})
})
app.listen(4000,()=>{
    console.log('listening on port 4000')
})