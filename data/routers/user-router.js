const express = require('express');
const userData = require('../helpers/userDb');

const router = express.Router();

// get
router.get('/', async (req,res)=>{
    try{
        const users = await userData.find(req.query);
        res.status(200).json(users)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: "Error retrieving users"})
    }
})
// getById

router.get('/:id', async (req, res)=>{
    
    try{
        const user = await userData.findById(req.params.id);
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(404).json({message: "Could not find user"})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error retrieving user"})
    }
})
// post
router.post('/', async (req, res)=> {
    try{    
        const user = await userData.insert(req.body);
        res.status(201).json(user)
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error adding the user"})
    }
})
// update
router.put('/:id', async (req, res)=> {
    try{
        const user = await userData.update(req.params.id, req.body);
        if(user){
            res.status(202).json(user)
        }
        else {
            res.status(404).json({message: "Could not find user"})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error updating user"})
    }
})
// delete
router.delete('/:id', async (req, res)=> {
    try{
        const count = await userData.remove(req.params.id);
        if(count > 0){
            res.status(200).json({message:"user deleted successfully"})
        }
        else {
            res.status(404).json({message: "user could not be found"})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error deleting user"})
    }
})

router.get(':/id/posts', async (req, res)=> {
    try{
        const posts = await userData.getUserPosts(req.params.id);
        res.status(200).json(posts);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error loading posts from user"})
    }
})


module.exports = router;


