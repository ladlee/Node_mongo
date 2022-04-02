const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//get all posts
router.get('/',async(req,res)=>
{
    try
    {
       const posts = await Post.find(); //returns all the posts mongoose method
       res.status(200).json(posts);
    }

    catch(err)
    {
        console.log(err);
        res.send(err);
    }
})

//create a new post
router.post('/',async(req,res)=>
{
    try
    {
       const post = new Post({
        title : req.body.title,
        description : req.body.description,
        date : req.body.date
      })

      let data = await post.save();
      res.status(200).json(data);
   }
   catch(err)
   {
       console.log(err);
   }
})

//get a post by id
router.get('/:id',async(req,res)=>
{
    try
    {
      let post = await Post.findById(req.params.id);
      res.status(200).json(post);
    }
    catch(err)
    {
        res.send(err);
    } 
})

//delete a post by id
router.delete('/:id',async(req,res)=>
{
   try
   {
      let post = await Post.deleteOne({ _id: req.params.id });
      res.status(202).send(post);
   }
   catch(err)
   {
       res.send(err);
   }
})

//update a post
router.patch('/:id',async(req,res)=>
{
    try
    {
       let post = await Post.updateOne({_id:req.params.id},{$set:{title:req.body.title}});
       res.status(202).send(post);
    }
    catch(err)
    {
        res.status(404).send(err)
    }
})


module.exports = router;