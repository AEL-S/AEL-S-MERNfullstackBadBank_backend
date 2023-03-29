const mongoose = require('mongoose')
const Schema = mongoose.Schema
// working on auth, adding below
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
//  just installed npm install bcrypt -g
// jsut installed npm install -g node-gyp
// -----------------------------------------
// just ran npm install -g bcryptjs
// npm link bcryptjs in root directory (this solved missing bcryptjs module error)

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: [String], required: true, unique:true },
        // added unique above
        password: { type: String, required: true },
        balance: { type: Number, default: 0}
    },
    { timestamps: true },
)

// working on auth, adding below:
    // UPDATE - THIS CODE IS WHAT IS HASHING THE PASSWORDS
UserSchema.pre('save', function(next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
      // Saving reference to this because of changing scopes
      const document = this;
      bcrypt.hash(document.password, saltRounds,
        function(err, hashedPassword) {
        if (err) {
          next(err);
        }
        else {
          document.password = hashedPassword;
          next();
        }
      });
    } else {
      next();
    }
  });

// // check if password is correct



// end of test code
module.exports = User = mongoose.model('users', UserSchema);
// -----------------------------------------



