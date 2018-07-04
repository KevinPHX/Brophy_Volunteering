const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const axios = require('axios');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/meanauth3', ['users']);
var request = require("request");


//User Schema
const UserSchema = mongoose.Schema({
  firstname: {
    type:String,
    required: true
  },
  lastname: {
    type:String,
    required: true
  },
  grade: {
    type:String,
    required: true
  },
  phonenumber: {
    type:String,
    required: true
  },
  email: {
    type:String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  school: {
    type:String,
    required: true
  },
  rating: {
    type:Number,
    required: false
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});



var User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}
module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    })
  })
}

module.exports.updateUser = function(newUser, callback){
  newUser.save(callback);
}

// module.exports.addRequest = function(newTutoree, callback){
//   newTutoree.save(callback);
// }

module.exports.hashPassword = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt)=>{
    console.log(newUser.firstname)
    console.log(newUser.password)
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      console.log(hash)
      newUser.password = hash;
      //newUser.save(callback);
    })
  })
}



module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
