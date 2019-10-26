const express = require('express');
const router = express.Router();

//@route     GET api/v1/auth
//@desc      Get login user
//@access    Private 
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

//@route     POST api/v1/auth
//@desc      Auth user & get token
//@access    Public 
router.post('/', (req, res) => {
    res.send('Login user');
});

module.exports = router;