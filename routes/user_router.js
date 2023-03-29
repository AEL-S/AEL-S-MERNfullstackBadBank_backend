// express router

// UPDATE: This code is functional. I can add users to BadBank db through api/postman. Note: to test in postman I need to use http://localhost:3100/api/post(or whatever the route is set to)

const express = require('express')

const User = require('../models/userModel');

// const UserSchema = require('../models/userModel');

// const {
//    _id, name, email, password, balance
// } = require ('../models/userModel')

const router = express.Router()

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

// below does work, BUT when withAuth is there it wont let anyone log in - i think there is something wrong with first giving the token but dont know what to do about it. goiing to set it back to where anyone gets a successful login message. might try firebase or something else for auth. 
// router.post('/auth/login', withAuth, async (req,res) => {
    router.post('/login', async (req,res) => {
          // Check for user email
        //   try{
        //     const users = await User.find();
        //   } catch(error) {
        //         res.status(500).json({message: error.message})
        //     }
        //     if (User && (await bcrypt.compare(password, User.password))) {
        //         res.json({
        //             _id: req.body._id,
        //             // name: User.name,
        //             name: req.body.name,
        //             email: req.body.email,
        //             password: req.body.password,
        //             balance: req.body.balance,
        //             token: generateToken(User._id),
        //         });
        //     } else {
        //         res.status(400);
        //         throw new Error("Invalid user credentials")
        //     }
     
   res.send('You are now logged in')
   
    console.log('logged in')
});

// signout
router.post('/signout', async (req,res) => {
    res.send('You are now signed out of your account')
    
     console.log('logged off')
 })

// // balance test
// router.get('/balance'), async (req, res) => {
//     res.send(`User balance is: ${balance}`)
// }

// -------------------------------------------  need to fill out the rest of the routes
// //Get all Method
// // This is working
// // router.get('/getAll', async (req, res) => {
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


