const express = require('express');
const router = express.Router();

//@route     GET api/v1/jobs
//@desc      Get All jobs
//@access    Private 
router.get('/', (req, res) => {
    res.send('Get all jobs of company');
});

//@route     POST api/v1/jobs
//@desc      Add job
//@access    Private 
router.post('/', (req, res) => {
    res.send('Add job');
});

//@route     PUT api/v1/jobs/:id
//@desc      Update job
//@access    Private 
router.put('/:id', (req, res) => {
    res.send('Update job');
});

//@route     DELETE api/v1/jobs/:id
//@desc      Delete job
//@access    Private 
router.delete('/:id', (req, res) => {
    res.send('Delete job');
});

module.exports = router;