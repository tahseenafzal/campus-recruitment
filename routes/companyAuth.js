const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const companyAuth = require('../middleware/companyAuth');
const { check, validationResult } = require("express-validator");

const Company = require("../models/User");

//@route     GET api/v1/companyauth
//@desc      Get login company user
//@access    Private
router.get("/", companyAuth, async (req, res) => {
  try {
      const user = await Company.findById(req.user.id).select('-password');
      res.json(user);
  } catch (err) {
      console.error(error.message);
      res.status(500).send('Server error');
  }
});

//@route     POST api/v1/companyauth
//@desc      Auth user & get token
//@access    Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email address").isEmail(),
    check("password", "Passwrod is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const payload = {
        user: {
          id: user.id,
          usertype: 'company'
        }
      }
      
      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      }, (err, token) => {
        if(err) throw err;
        res.json({ token });
      })

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
