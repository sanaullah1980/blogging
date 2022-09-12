const express = require("express");
const User = require("../model/User");
const bcrypt = require ("bcrypt");

const router = express();

//register user
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hasshedPassword = await bcrypt.hash(req.body.password, salt);
        const user = await User.create({
            ...req.body,
            password: hasshedPassword
        });
        res.status(200).json({
            succcess: true,
            user: user
        })
    } catch (error) {
        res.status(500).json({
            succcess: false,
            error: error
        })
    }
});

//autheticate user 
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username });
       
        if( !user){
            return res.status(400).json("Invalid username");
        }
         
        const validatepass = await bcrypt.compare(req.body.password, user.password);
        if (!validatepass){
            return res.status(400).json("Invalid password");
        }

        const {password, ...othersProp} = user._doc;

        res.status(200).json({
            succcess: true,
            user: othersProp
        })

    } catch (error) {
        res.status(500).json({
            succcess: false,
            error: error
        })
    }
});

module.exports = router;