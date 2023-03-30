// express router

// UPDATE: This code is functional. I can add users to BadBank db through api/postman. Note: to test in postman I need to use http://localhost:3100/api/post(or whatever the route is set to)

const express = require('express')

const User = require('../models/userModel');

// const UserSchema = require('../models/userModel');

// const {
//    _id, name, email, password, balance
// } = require ('../models/userModel')

const router = express.Router()
Access-Control-Allow-Private-Network: true
// const bcrypt = require('bcryptjs');

// working code -----------------
// create account route
    router.post('/createaccount', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // adding balance down here
        balance: 0,
    })
    try {
       newUser
       .save()
       .then(user => res.json(user))
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Account login


    router.post('/login', async (req,res) => {
          // Check for user email
        //   try{
       
   res.send('You are now logged in')
   
    console.log('logged in')
});

// signout
router.post('/signout', async (req,res) => {
    res.send('You are now signed out of your account')
    
     console.log('logged off')
 })


    router.get('/alldata', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})
// // above does seem to work in postman...jsut need to figure out how to get it to show up on alldata page

module.exports = router;
