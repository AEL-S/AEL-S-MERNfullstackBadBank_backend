//      -  node express server - (main server!) -(index.js in old file)

// run node index.js to start server on localhost -- OR: run npm start and it starts nodemon which updates with every change


const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
// const cookieParser = require('cookie-parser');
// const withAuth = require('../middleware');
// const  authenticateToken  = require('../authenticateToken')
// const fireBaseAdmin = require('firebase-admin');
// cant get errors to go away, no longer can connect to server or to db. will probably need to revert all code tomororw. 

app.use(cors());
app.use(express.json());
// app.use(cookieParser());
// added cookie parser here for auth 

// if test fails and i need to go back uncomment these below:
const db = require('../database/index')

// const dal =  require('../database/dal');

const userRouter = require('../routes/user_router')

//  for fire base - need to put this in here somewhere
// const decodeIDToken = require('../authenticateToken');
// app.use(decodeIDToken);




// --------------------- for auth
const bcrypt = require('bcryptjs');
// const saltRounds = 10;

// const jwt = require('jsonwebtoken');
// trying above to add auth

// jwt was giving a not found module error, tried npm install -g jsonwebtoken
//  npm link jsonwebtoken - seeing if it worked - didnt work this time/update, it did work just had to do it from root directory


// secret string to use for signing tokens below:
// can put this in .env file later to keep secret
// const secret = 'mysecretstring';

// ----------------------- end of for auth

const apiPort = 3100


// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static('public'));
app.use(express.static('src'));

// app.use(bodyParser.json())
// ------- test start below:


// added below
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

 // above threw an error after I commmented out index.js in trying to replace it with dal.js

// // end of test -------------------
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// test to connect front end to back end---
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});


// auth test
// moving below from user router to here didnt seem to work. still missinng token in posman
// app.get('/api/secret', withAuth, function(req, res) {
//   res.send('The password is potato');
// });
// // -----------


// ask our server if we have a valid token saved to our browser cookies.
// app.get('/checkToken', withAuth, function(req, res) {
//   res.sendStatus(200);
// });
// i think above was throwing router error

app.use('/api', userRouter)

app.listen(apiPort, () => console.log(`Node express server listening on port ${apiPort}`))