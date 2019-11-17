const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Job = require('../models/Job');
const auth = require('../middleware/auth');

// create API params schema for validation
const postApiParamsSchema = Joi.object({
    title: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    requirement: Joi.string().trim().required()
});

// @route    GET api/v1/jobs/get-jobs
// @desc     Get jobs
// @access   Private
router.get('/get-jobs', async (req, res) => {

    try {
        // const jobs = await Job.find({ Company: { $in: req.user.id } }).populate('date', { date: 0 });
        const jobs = await Job.find({});
        // check job if not created by user
        if (jobs.length < 1) {
            return res.json({
                success: true,
                message: "You have not created any job yet!"
            });
        }

        return res.json({
            success: true,
            jobs
        });

    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }

});

// @route    POST api/v1/jobs/create-job
// @desc     Create job
// @access   Private
router.post('/create-job', async (req, res) => {

    // destructure body
    const { title, description, requirement } = req.body;

    // validate api params
    const { error } = postApiParamsSchema.validate({ title, description, requirement });
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    try {
        // create job
        let job = await new Job({
            title,
            description,
            requirement,
            // company: req.user.id,
        });

        // save job to database
        await job.save();
        // populate created job
        job = await job.populate('company', { user: 0 }).execPopulate();

        return res.json({
            success: true,
            message: 'Job created successfully',
            job
        });

    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }

});

// @route    PUT api/v1/jobs/update-job/:id
// @desc     Update job
// @access   Private
router.put('/update-job/:id', auth, async (req, res) => {

    // validate objectID
    const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidObjectId) {
        return res.status(400).json({ success: false, message: 'Invalid object id' });
    }

    // check allowed params
    const updates = Object.keys(req.body);
    const allowedUpdates = ["title", "description", "requirement"];
    const isValidOperations = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperations) {
        return res.status(400).json({ success: false, message: 'Invalid API Paramaters' });
    }

    // check empty body 
    if (Object.keys(req.body).length < 1) {
        return res.status(400).json({ success: false, message: 'Fields required in body' });
    }

    // validate api params for empty values
    const { error } = putApiParamsSchema.validate(req.body);
    if (error) {
        return res.status(400).send({
            success: false,
            message: error.details[0].message
        });
    }

    try {
        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedJob) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        return res.json({
            success: true,
            updatedJob
        });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message40520

        });
    }

});

// @route    DELETE api/v1/jobs/delete-job/:id
// @desc     delete job
// @access   Private
router.delete('/delete-job/:id', auth, async (req, res) => {

    // validate object ID
    const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidObjectId) {
        return res.status(400).json({ success: false, message: 'Invalid Object ID' });
    }

    try {
        // search job in database
        const deletedJob= await Job.findByIdAndDelete(req.params.id);
        if (!deletedJob) {
            return res.status(400).json({ success: false, message: 'Job not found' });
        }

        return res.json({ success: true, message: 'Job deleted successfully!' });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message40520

        });
    }

});

module.exports = router;