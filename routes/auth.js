const express = require('express')
const router = express.Router()
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')
const { check, validationResult } = require("express-validator");

//get logged in user @private
router.get('/',auth,  async (req,res)=>{
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (error) {
    console.log(error)
  }
})

// auth user and get token @public
router.post('/', [
  check('email', 'please enter a valid email').isEmail(),
  check('password', 'password is required').exists()
], async (req,res)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
  const {email, password} = req.body
  
  try {
    let user = await User.findOne({email})
    if(!user){
      return res.status(400).json({msg: 'user does not exist please sign up'})
    }
    const isMatch = await  bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(400).json({msg: 'password incorrect!'})

    const payload = {
      user: {
        id: user.id,
      },
    }
    jwt.sign(
      payload,
      config.get("secretOrKey"),
      {
        expiresIn: 604800,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error)
  }
})
module.exports =  router