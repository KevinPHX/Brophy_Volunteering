const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const axios = require('axios');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/meanauth3', ['tutoree']);
var request = require("request");




const TutoreeSchema = mongoose.Schema({
  timerequest: {
    type:String,
    required: true
  },
  timeaccept: {
    type:String,
    require: false
  },
  tutoreename: {
    type:String,
    require: true
  },
  tutoreeusername: {
    type:String,
    require: true
  },
  tutoreeemail: {
    type:String,
    require: true
  },
  tutoreephonenumber: {
    type:String,
    require: true
  },
  tutoreegrade: {
    type:String,
    require: true
  },
  type: {
    type:String,
    require: true
  },
  subject: {
    type:String,
    require: true
  },
  topic: {
    type:String,
    require: true
  },
  addinfo: {
    type:String,
    require: false
  },
  tutorname: {
    type:String,
    require: false
  },
  tutoremail: {
    type:String,
    require: false
  },
  tutorphonenumber: {
    type:String,
    require: false
  },
  tutorgrade: {
    type: String,
    require: false
  },
  rated: {
    type: Boolean,
    require: false
  },
  read: {
    type: Boolean,
    require: false
  },
})


const Tutoree = module.exports = mongoose.model('Tutoree', TutoreeSchema, 'tutoree');
module.exports.getTutoreeById = function(id, callback){
  Tutoree.findById(id, callback);
}


module.exports.addRequest = function(newTutoree, callback){
  newTutoree.save(callback);
}
