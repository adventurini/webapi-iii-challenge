const express = require('express');
const postData = require('../helpers/postDb');

const router = express.Router();

// get
router.get('/', async (req,res)=>{
    try{
        const posts = await postData.find(req.query);
        res.status(200).json(posts)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: "Error retrieving posts"})
    }
})
// getById

router.get('/:id', async (req, res)=>{
    
    try{
        const post = await postData.findById(req.params.id);
        if(post){
            res.status(200).json(post)
        }
        else{
            res.status(404).json({message: "Could not find post"})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error retrieving post"})
    }
})
// post
router.post('/', async (req, res)=> {
    try{    
        const post = await postData.insert(req.body);
        res.status(201).json(post)
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error adding the post"})
    }
})
// update
router.put('/:id', async (req, res)=> {
    try{
        const post = await postData.update(req.params.id, req.body);
        if(post){
            res.status(202).json(post)
        }
        else {
            res.status(404).json({message: "Could not find post"})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error updating post"})
    }
})
// delete
router.delete('/:id', async (req, res)=> {
    try{
        const count = await postData.remove(req.params.id);
        if(count > 0){
            res.status(200).json({message:"Post deleted successfully"})
        }
        else {
            res.status(404).json({message: "Post could not be found"})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error deleting post"})
    }
})

module.exports = router;


