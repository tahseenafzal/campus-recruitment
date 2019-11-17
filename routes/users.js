const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Joi = require("@hapi/joi");

const User = require("../models/User");

// environment variable setup
const JWT_SECRET = process.env.JWT_SECRET || config.get("JWT_SECRET");

// api params schema for validation
const apiParamsSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string()
    .min(8)
    .required(),
  usertype: Joi.string().required()
});

// @route    POST /api/v1/users/register
// @desc     Register user
// @access   Public
router.post("/register", async (req, res) => {
//  console.log(state.users)
  // destructure username & password
  let { username, password, email, usertype } = req.body;
  // lowercase username
  username = username.toLowerCase();
  email = email.toLowerCase();

  try {

    // validate api params
    const { error } = apiParamsSchema.validate({
      username,
      password,
      email,
      usertype
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    // check username in database before creating new user
    let isUser = await User.findOne({ username });
    if (isUser) {
      return res.status(400).json({
        success: false,
        message: "Username already exists"
      });
    }

    let isEmail = await User.findOne({ email });


    if (isEmail) {
      return res.status(400).json({
        success: false,
        message: "email address already exists"
      });
    }

    // create user
    user = await new User({
      username,
      password,
      email,
      usertype
    });

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // replace plain password with hash password
    user.password = hash;

    // save user into database
    await user.save();

    // create jsonwebtoken
    const payload = {
      user: {
        username,
        id: user.id,
        usertype
      }
    };

    const token = await jwt.sign(payload, JWT_SECRET, {
      expiresIn: "365d"
    });

    // send response
    return res.json({
      success: true,
      token,
      message: "User registered successfully"
    });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message
    });
  }
});

// @route    POST api/v1/user/login
// @desc     Login user
// @access   Public
router.post("/login", async (req, res) => {
  // destructure username and password
  let { username, password } = req.body;
  // lowercase username
  username = username.toLowerCase();

  // validate api params
  const { error } = apiParamsSchema.validate({ username, password });
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }

  try {
    // find user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid username"
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });
    }

    // create jsonwebtoken
    const payload = {
      user: {
        username: user.username,
        id: user._id,
        usertype: user.usertype
      }
    };

    const token = await jwt.sign(payload, JWT_SECRET, {
      expiresIn: "365d"
    });

    // send response
    return res.json({
      success: true,
      token,
      username: user.username,
      _id: user._id,
      usertype: user.usertype
    });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
