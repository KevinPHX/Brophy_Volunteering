const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const axios = require('axios');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/meanauth3', ['tutor']);
var request = require("request");


const TutorSchema = mongoose.Schema({
  timerequest: {
    type:String,
    required: true
  },
  timeaccept: {
    type:String,
    require: true
  },
  tutorname: {
    type:String,
    require: true
  },
  tutorusername: {
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
  tutoreename: {
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
    type: String,
    require: true
  },
})

var Tutor = module.exports = mongoose.model('Tutor', TutorSchema, 'tutor');
module.exports.getTutorById = function(id, callback){
  Tutor.findById(id, callback);
}


module.exports.addAccept = function(newTutor, callback){
  newTutor.save(callback);
}
