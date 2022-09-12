const express = require("express");
const User = require("../model/User");
const bcrypt = require("bcrypt");

const router = express();

//get user 
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...otherProps} = user._doc;
        res.status(200).json(otherProps)

    } catch (error) {
        res.status(500).json(error);
    }
})

//update user
router.put("/:id", async (req, res) => {
    if( req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt); 
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{new: true});
            res.status(200).json({
                success:true,
                user: updatedUser
            });

        } catch (error) {
            console.log("error here")
            res.status(500).json(error)
        }
    }else{
        res.status(401).json("You can't update the account")
    }
});

//delete user
router.delete("/:id", async (req, res) => {
    if( req.body.userId === req.params.id){
        //todo: delete user post as well before delteing the user
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
        } catch (error) {
            console.log("error here")
            res.status(500).json(error)
        }
    }else{
        res.status(401).json("You can't delete the account")
    }
});

module.exports = router;