const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const config = require("../config/database")
const User = require('../models/user');
const Tutoree = require('../models/tutoree');
const Tutor = require('../models/tutor');
const bcrypt = require('bcryptjs');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/meanauth3');
var request = require("request");
const mongoose = require('mongoose');
var nev = require('email-verification')(mongoose);
var nodemailer = require("nodemailer")
var async = require("async")
var crypto = require("crypto")
var ObjectID = require('mongodb').ObjectID;
mongoose.connect(config.database);



nev.configure({
    verificationURL: 'http://localhost:3000/users/email-verification/${URL}',
    persistentUserModel: User,
    tempUserCollection: 'temporary_users',

    transportOptions: {
        service: 'Gmail',
        auth: {
            user: 'brophy.volunteering.sign.up@gmail.com',
            pass: 'Whatever2018'
        }
    },
    verifyMailOptions: {
        from: 'Do Not Reply <brophy.carpool.sign.up_do_not_reply@gmail.com>',
        subject: 'Please confirm account',
        html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
        text: 'Please confirm your account by clicking the following link: ${URL}'
    }
}, function(error, options){
  if (error)
    console.log(error)
});

nev.generateTempUserModel(User);








//Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    grade: req.body.grade,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    username: req.body.username,
    password: req.body.password,
    school: req.body.school,
    rating: 0,
    requests: 0,
  });




  nev.createTempUser(newUser, function(err, existingPersistentUser, newTempUser) {
      // some sort of error
      if (err)
          console.log(err)

      // user already exists in persistent collection...
      if (existingPersistentUser)
          console.log("You have already registered")

      // a new user
      if (newTempUser) {
          var URL = newTempUser[nev.options.URLFieldName];
          nev.sendVerificationEmail(req.body.email, URL, function(err, info) {
              if (err)
                  console.log(err)

              console.log("Email Sent")

          });

      // user already exists in temporary collection...
      } else {
          console.log("User already exists")
      }
  });

  User.hashPassword(newUser, (err, user) => {
    if(err){
      console.log(err)
      res.json({success:false, msg:"Failed to register user"});
    } else {
      res.json({success: true, msg:"User registered"});
    }
  });

})
////////////////////////////////////////////////////////////////////////////////
              //update
router.post('/update', (req, res, next) => {
  let newUser = new User({
    school:req.body.school,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    grade:req.body.grade,
    email:req.body.email,
    phonenumber: req.body.phonenumber,
    username: req.body.username,
    password: req.body.password,//add way to identify whether email is brophy/xavier. Use this:http://www.java2s.com/Tutorials/Javascript/Node.js_Tutorial/0050__Node.js_String_Functions.htm
    rating: req.body.rating,
    requests: req.body.requests,
    });

    User.updateUser(newUser, (err, user) => {
        if(err){
            res.json({success:false, msg:"Failed to register user"});
          } else {
            res.json({success: true, msg:"User registered"});
          }
    })
})

router.post('/godbutton', function (req, res, next){
  db.collection('users').remove({grade: "12"}, function(err){
      if(err){
          res.send(err);
      }
  });
  db.collection('users').update(
    {grade : "9"},
    {$set: {grade:"10"}},
  function(err) {
  if (err) res.send(err);
  });
  db.collection('users').update(
    {grade : "10"},
    {$set: {grade:"11"}},
  function(err) {
  if (err) res.send(err);
  });
  db.collection('users').update(
    {grade : "11"},
    {$set: {grade:"12"}},
  function(err) {
  if (err) res.send(err);
  });

  db.collection('users').update(
    {},
    {$set: {requests:0}},
  function(err) {
  if (err) res.send(err);
  });
  db.collection('users').update(
    {},
    {$set: {rating:0}},
  function(err) {
  if (err) res.send(err);
  });
  db.collection('tutor').remove({tutorgrade : '12'}, function(err) {
  if (err) res.send(err);
  });
  db.collection('tutoree').remove({tutoreegrade : '12'}, function(err) {
  if (err) res.send(err);
  });
  db.collection('tutor').update(
    {tutorgrade:"9"},
    {$set: {tutorgrade:"10"}},
  function(err) {
  if (err) res.send(err);
  });
  db.collection('tutor').update(
    {tutorgrade:"10"},
    {$set: {tutorgrade:"11"}},
  function(err) {
  if (err) res.send(err);
  });
  db.collection('tutor').update(
    {tutorgrade:"11"},
    {$set: {tutorgrade:"12"}},
  function(err) {
  if (err) res.send(err);
  });
  db.collection('tutoree').update(
    {tutoreegrade:"9"},
    {$set: {tutoreegrade:"10"}},
  function(err) {
  if (err) res.send(err);
  });
  db.collection('tutoree').update(
    {tutoreegrade:"10"},
    {$set: {tutoreegrade:"11"}},
  function(err) {
  if (err) res.send(err);
  });
  db.collection('tutoree').update(
    {tutoreegrade:"11"},
    {$set: {tutoreegrade:"12"}},
  function(err) {
  if (err) res.send(err);
  });
})

////////////////////////////////////////////////////////////////////////////////
// router.get('/filter/:subject', function ( req, res, next){
//   db.collection('tutoree').find({subject : req.params.subject, type: "Pending"}).toArray(function(err, users) {
//   if (err) res.send(err);
//   res.json(users);
//   });
// })
router.get('/myrequest/:tutoreeusername', function ( req, res, next){
  db.collection('tutoree').find({tutoreeusername : req.params.tutoreeusername, type: "Pending"}).toArray(function(err, users) {
  if (err) res.send(err);
  res.json(users);
  });
})
router.get('/mypastrequests/:tutoreeusername', function ( req, res, next){
  db.collection('tutoree').find({tutoreeusername : req.params.tutoreeusername, type: "Completed"}).sort({$natural:-1}).toArray(function(err, users) {
  if (err) res.send(err);
  res.json(users);
  });
})
router.get('/match/:tutoreeusername', function ( req, res, next){
  db.collection('tutoree').find({type: "Pending", tutoreeusername: {$ne: req.params.tutoreeusername}}).sort({$natural:-1}).toArray(function(err, users) {
  if (err) res.send(err);
  res.json(users);
  });
})
router.get('/myacceptedrequests/:tutorusername', function ( req, res, next){
  db.collection('tutor').find({tutorusername : req.params.tutorusername, type: "Completed"}).sort({$natural:-1}).toArray(function(err, users) {
  if (err) res.send(err);
  res.json(users);
  });
})
router.get('/checkrequest/:tutoreeid', function ( req, res, next){
  db.collection('tutoree').find({_id: ObjectID(req.params.tutoreeid)}).toArray(function(err, tutoree) {
  if (err) res.send(err);
  res.json(tutoree);
  });
})
////////////////////////////////////////////////////////////////////////////////
router.get("/unreadrequests/:tutoreeusername", function (req, res, next){
  db.collection('tutoree').count({tutoreeusername : req.params.tutoreeusername,read:false, type: "Completed"}, function(error, numOfDocs){
    if(error) res.send(error);
    res.json(numOfDocs)
  })
})
router.get("/acceptedrequestscount/:tutorusername", function (req, res, next){
  db.collection('tutor').count({tutorusername : req.params.tutorusername, type: "Completed"}, function(error, numOfDocs){
    if(error) res.send(error);
    res.json(numOfDocs)
  })
})

router.post("/readrequests/:tutoreeid", function (req, res, next){
    Tutoree.getTutoreeById(req.params.tutoreeid, function(err, tutoree){
      db.collection('tutoree').update({_id: ObjectID(req.params.tutoreeid), read:false},
      {$set: {read:true}},
      function(err) {
        if (err) res.send(err);
    })
    })

})






////////////////////////////////////////////////////////////////////////////////
router.post('/ratetutor/:email', function (req, res, next){
  User.findOne({email: req.params.email}, function(err, user) {
                if (err){
                    res.send(err);
                  }
                  db.collection('users').update(
                    {username: user.username},
                    {$set: {rating: user.rating + 1}},
                    function(err, users) {
                      if (err) res.send(err);
                      // res.json(users);
                  })


  })
})
router.get('/leaderboard', function (req, res, next){
  db.collection("users").find({rating: {$ne:0}}).sort({rating:-1}).limit(10).toArray(function(err, users) {
  if (err) res.send(err);
  res.json(users);
  });
})
router.post('/disablerating/:tutoreeid', function (req, res, next){
  db.collection('tutoree').update(
      {_id: ObjectID(req.params.tutoreeid)},
      {$set: {rated: true}},
      function(err) {
        if (err) res.send(err);
    })
})

////////////////////////////////////////////////////////////////////////////////
router.post('/request/:username', function ( req, res, next){
  var date = new Date()
  month = date.getMonth() + 1
  if (date.getMinutes() < 10){
    minutes = "0" + date.getMinutes()
  } else {
    minutes = date.getMinutes()
  }
  User.getUserByUsername(req.params.username, function(err, user) {
                if (err){
                    res.send(err);
                  }


                  let newTutoree = new Tutoree({
                    timerequest: "" + month + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + minutes,
                    timeaccept: null,
                    tutoreename: user.firstname + " " + user.lastname,
                    tutoreeusername:user.username,
                    tutoreeemail: user.email,
                    tutoreephonenumber:user.phonenumber,
                    tutoreegrade: user.grade,
                    type: "Pending",
                    subject: req.body.subject,
                    topic: req.body.topic,
                    addinfo: req.body.addinfo,
                    tutorname: null,
                    tutoremail: null,
                    tutorphonenumber: null,
                    tutorgrade:null,
                    rated:false,
                    read:false
                  })
                  console.log(newTutoree.timerequest)
                  Tutoree.addRequest(newTutoree, (err, tutoree) => {
                      if(err){
                          res.json({success:false, msg:"Failed to add request"});
                        } else {
                          res.json({success: true, msg:"Request added"});
                        }
                  })


            });


  })

router.post('/accept/:id/:email', function ( req, res, next){
  var date1 = new Date();
  month = date1.getMonth() + 1;
  if (date1.getMinutes() < 10){
    minutes = "0" + date1.getMinutes()
  } else {
    minutes = date1.getMinutes()
  }
  date2 = "" + month + "/" + date1.getDate() + "/" + date1.getFullYear() + " " + date1.getHours() + ":" + minutes;
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brophy.tutoring.requests@gmail.com',
    pass: 'Whatever2018'
  }
  });
  Tutoree.findOne({_id: ObjectID(req.params.id), type: "Pending"}, function(err, tutoree) {
                if (err){
                    res.send(err);
                  }



                  User.findOne({ email: req.params.email }, function(err, tutor) {
                    if (!tutor) {
                    return res.json({success: false});
                    }


                    //console.log(tutoree.timerequest)
                    let newTutor = new Tutor({
                      timerequest: tutoree.timerequest,
                      timeaccept: "" + month + "/" + date1.getDate() + "/" + date1.getFullYear() + " " + date1.getHours() + ":" + minutes,
                      tutorname: tutor.firstname + " " + tutor.lastname,
                      tutorusername: tutor.username,
                      tutorgrade: tutor.grade,
                      type: "Completed",
                      subject: tutoree.subject,
                      topic: tutoree.topic,
                      addinfo: tutoree.addinfo,
                      tutoreename: tutoree.tutoreename,
                      tutoreeemail: tutoree.tutoreeemail,
                      tutoreephonenumber: tutoree.tutoreephonenumber,
                      tutoreegrade: tutoree.tutoreegrade
                    })
                    console.log(newTutor.tutoreename)
                    Tutor.addAccept(newTutor, (err, tutor) => {
                        if(err){
                            res.json({success:false, msg:"Failed to add accept"});
                          } else {
                            res.json({success: true, msg:"Accept added"});
                          }
                    })

                    db.collection('users').update(
                      {username: tutor.username},
                      {$set: {requests: tutor.requests + 1}},
                      function(err, users) {
                        if (err) res.send(err);
                        // res.json(users);
                    })


                    db.collection('tutoree').update(
                      {_id: ObjectID(req.params.id), type: "Pending"},
                      {$set: {timeaccept: date2, type:"Completed", tutorname: tutor.firstname + " " + tutor.lastname, tutoremail: tutor.email, tutorphonenumber: tutor.phonenumber, tutorgrade: tutor.grade}},
                    function(err, users) {
                    if (err) res.send(err);
                    // res.json(users);
                    });



                    var mailOptions = {
                      from: 'brophy.tutoring.requests@gmail.com',
                      to: tutoree.tutoreeemail,
                      subject: 'Tutoree Confirmation Email',
                      text: "Your tutor will be " + tutor.firstname + " " + tutor.lastname + ". The phone number is " + tutor.phonenumber + ", and the email is " + tutor.email
                    };

                    transporter.sendMail(mailOptions, function(error, info){
                      if (error) {
                        console.log(error);
                      } else {
                        console.log('Email sent: ' + info.response);
                      }
                    });


                    var mailOptions1 = {
                      from: 'brophy.tutoring.requests@gmail.com',
                      to: tutor.email,
                      subject: 'Tutor Confirmation Email',
                      text: "Your tutoree will be " + tutoree.tutoreename + ". The phone number is " + tutoree.tutoreephonenumber + ", and the email is " + tutoree.tutoreeemail + ". The subject and topic " + tutoree.tutoreename + " needs help on are " + tutoree.subject + " and " + tutoree.topic
                    };

                    transporter.sendMail(mailOptions1, function(error, info){
                      if (error) {
                        console.log(error);
                      } else {
                        console.log('Email sent: ' + info.response);
                      }
                    });
                })
  });
})

router.post('/cancel/:id', function ( req, res, next){
    db.collection('tutoree').update(
      {_id : ObjectID(req.params.id), type:"Pending"},
      {$set: {type:"Cancelled"}},
    function(err, users) {
    if (err) res.send(err);
    res.json(users);
    });
})

router.post('/editrequest/:id', function ( req, res, next){
    subject = req.body.subject;
    topic = req.body.topic;
    addinfo = req.body.addinfo;
    db.collection('tutoree').update(
      {_id : ObjectID(req.params.id), type:"Pending"},
      {$set: {subject: subject, topic: topic, addinfo: addinfo}},
    function(err, users) {
    if (err) res.send(err);
    res.json(users);
    });
})



//Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err,user)=>{
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg:'User not Found'})
    }

    User.comparePassword(password, user.password, (err, isMatch) =>{
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user,config.secret, {
          expiresIn: 604800 //1 week
        });
        res.json({
          success:true,
          token:'JWT '+token,
          user:{
            id:user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username:user.username,
            email: user.email,
          }
        })
      } else {
        return res.json({success: false, msg:"Wrong password"})
      }
    });//How are tokens made
  })
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});




router.get('/contacts', function(req, res, next){
    db.users.find().sort({"lastname": 1, "firstname":1}, function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});


router.delete('/delete/:id', function(req, res, next){
    db.users.remove({_id: db.ObjectId(req.params.id)}, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
});
router.delete('/deleterequests/:username', function(req, res, next){
  db.collection('tutor').remove({tutorusername : req.params.username, type: "Completed"}, function(err) {
  if (err) res.send(err);
  });
  db.collection('tutoree').remove({tutoreeusername : req.params.username}, function(err) {
  if (err) res.send(err);
  });
});

router.get('/email-verification/:URL', function(req, res){
  var url = req.params.URL;
nev.confirmTempUser(url, function(err, user) {
    if (err)
        console.log(err)

    // user was found!
    if (user) {
      res.send('You have successfully verified your account')
        // optional
        nev.sendConfirmationEmail(user['email'], function(err, info) {
            console.log("Successfully Verified")
        });
    }

    // user's data probably expired...
    else
        console.log("User data expired")
});
})

router.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
        //   console.log('error', 'No account with that email address exists.');
        return res.json({success: false});
        //res.redirect('/forgot');
        }
console.log('step 1')
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
        console.log('step 2')


      var smtpTrans = nodemailer.createTransport({
         service: 'Gmail',
         auth: {
          user: 'brophy.tutoring.passreset@gmail.com',
          pass: 'Whatever2018'
        }
      });
      var mailOptions = {

        to: user.email,
        from: 'brophy.tutoring.passreset@gmail.com',
        subject: 'Brophy Tutoring Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://localhost:3000/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'

      };
      console.log('step 3')

        smtpTrans.sendMail(mailOptions, function(err) {
        res.json('An e-mail has been sent to ' + user.email + ' with further instructions.');
        console.log('sent')
        //res.redirect('/forgot');
});
}
  ], function(err) {
    console.log('this err' + ' ' + err)
    res.send(err)
    //res.redirect('/');
  });
});

router.get('/forgot', function(req, res) {
  res.render('forgot', {
    User: req.user
  });
});

router.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
      console.log(user);
    if (!user) {
      res.send('Password reset token is invalid or has expired.');
      //res.redirect('/forgot');
    }
    res.render('reset', {
     User: req.user
    });
  });
});




router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user, next) {
        if (!user) {
          res.send('Password reset token is invalid or has expired.');
          //res.redirect('back');
        }

        user.password = req.body.password

        bcrypt.genSalt(10, (err, salt)=>{
          bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) throw err;
            user.password = hash;




        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        console.log('password' + user.password  + 'and the user is' + user)

user.save(function(err) {
  if (err) {
      console.log('here')
      //res.redirect('back');
  } else {
      console.log('here2')
    // req.logIn(user, function(err) {
     done(err, user);
    // });

  }
        });
      })
    })



      });
    },





    function(user, done) {
        console.log('got this far 4')
      var smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'brophy.tutoring.passreset@gmail.com',
          pass: 'Whatever2018'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'brophy.tutoring.passreset@gmail.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          ' - This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTrans.sendMail(mailOptions, function(err) {
        res.json('Success! Your password has been changed.');
        done(err);
      });
    }




  ], function(err) {
    console.log(err)
    //res.redirect('/');
  });
});

module.exports = router;
