const express = require("express");
const User = require("../model/User");
const Post = require("../model/Post");

const router = express();

//get Post 
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error);
    }
})

//get all post
router.get("/", async (req, res) => {
    const username = req.query.user;
    const categoryName = req.query.cat;
    let posts;
    try {
        if(username){
            posts = await Post.find({username});
        }else if(categoryName){
            posts = await Post.find({
                categories: {
                    $in: categoryName
                }
            })
        }else {
            posts = await Post.find();
        }

        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json(error);
    }
})

//Create post 
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const post = await newPost.save();
        res.status(200).json(post);
    } catch (error) {
       res.status(500).json(error)
    }

});

//update user
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
               const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                $set: req.body
               }, { new: true});
               res.status(200).json(updatedPost)
            } catch (error) {
                res.status(500).json(error)        
            }
        }else{
            res.status(401).json("You can't update the post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
});

//delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        console.log(req.body);
        if(post.username === req.body.username){
            try {
               await post.delete();
               res.status(200).json("Past hase been deleted")
            } catch (error) {
                res.status(500).json(error)        
            }
        }else{
            res.status(401).json("You can't delete the post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;