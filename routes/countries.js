const express = require('express');
const router = express.Router();
const Post = require('../models/post')

//get all countries
router.get('/', async(req, res) => {
    
    try{
        const posts= await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
})

//post method
router.post('/', async (req,res)=>{
    const post = new Post({
        emotion: req.body.emotion,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err})
    }
})

//get results for specifc country
router.get('/:postId', async (req,res)=>{
    try{
        const post = await Post.find({country:req.params.postId})
        res.json(post);
    }catch(err){
        console.log(err)
    }
})
module.exports = router;