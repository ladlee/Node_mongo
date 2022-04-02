const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')
const postsRoute = require('./Routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

//Routes
app.get('/',(req,res)=>
{
   // console.log(req.headers);
    res.send('Welcome to Home Page');
})

app.use('/posts',postsRoute);

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, ()=> console.log("connected to DB"))

//start server
app.listen(3000);