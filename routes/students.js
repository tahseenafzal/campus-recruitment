const express = require('express');
const router = express.Router();

//@route     GET api/v1/students
//@desc      Get All Students
//@access    Private 
router.get('/', (req, res) => {
    res.send('Get all Students');
});

//@route     POST api/v1/students
//@desc      Add student
//@access    Private 
router.post('/', (req, res) => {
    res.send('Add student');
});

//@route     PUT api/v1/students/:id
//@desc      Update students
//@access    Private 
router.put('/:id', (req, res) => {
    res.send('Update student');
});

//@route     DELETE api/v1/students/:id
//@desc      Delete student
//@access    Private 
router.delete('/:id', (req, res) => {
    res.send('Delete student');
});

module.exports = router;