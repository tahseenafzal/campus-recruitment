const express = require('express');
const router = express.Router();

//@route     GET api/v1/companies
//@desc      Get All companies
//@access    Private 
router.get('/', (req, res) => {
    res.send('Get all companies');
});

//@route     POST api/v1/companies
//@desc      Add Company
//@access    Private 
router.post('/', (req, res) => {
    res.send('Add Company');
});

//@route     PUT api/v1/companies/:id
//@desc      Update Company
//@access    Private 
router.put('/:id', (req, res) => {
    res.send('Update Company');
});

//@route     DELETE api/v1/companies/:id
//@desc      Delete Company
//@access    Private 
router.delete('/:id', (req, res) => {
    res.send('Delete Company');
});

module.exports = router;