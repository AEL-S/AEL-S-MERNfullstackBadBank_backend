// is this dal?
// database index - connection
require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');



const mongoString = process.env.DATABASE_URL

mongoose
    .connect(mongoString, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection;
console.log('Sucessfully connected to BadBank DB')



module.exports = db


