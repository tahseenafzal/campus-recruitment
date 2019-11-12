const express = require("express");
const router = express.Router();
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const Student = require("../models/Student");
const auth = require("../middleware/auth");

// create API params schema for validation
const postApiParamsSchema = Joi.object({
  firstname: Joi.string()
    .trim()
    .required(),
  lastname: Joi.string()
    .trim()
    .required(),
  gender: Joi.string()
    .trim()
    .required(),
  address: Joi.string()
    .trim()
    .required(),
  qualification: Joi.string()
    .trim()
    .required(),
  skills: Joi.string()
    .trim()
    .required(),
  hobies: Joi.string()
    .trim()
    .required(),
  email: Joi.string()
    .trim()
    .required(),
  mobile: Joi.string()
    .trim()
    .required(),
  home: Joi.string()
    .trim()
    .required()
});

// @route    GET api/v1/students/get-students
// @desc     Get students
// @access   Private
router.get("/get-students", auth, async (req, res) => {
  try {
    const students = await Student.find({});

    // check student if not created by user
    if (students.length < 1) {
      return res.json({
        success: true,
        message: "there is no student found!"
      });
    }

    return res.json({
      success: true,
      students
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

// @route    POST api/v1/students/create-student
// @desc     Create student
// @access   Private
router.post("/create-student", auth, async (req, res) => {
  // destructure body
  const { firstname, lastname, gender, address, qualification, skills, hobies, email, mobile, home } = req.body;

  // validate api params
  const { error } = postApiParamsSchema.validate({
    firstname,
    lastname,
    gender,
    address, 
    qualification,
    skills,
    hobies,
    email,
    mobile,
    home
  });
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }

  try {
    // create student
    let student = await new Student({
      firstname,
      lastname,
      gender,
      address,
      qualification,
      skills,
      hobies,
      email,
      mobile,
      home,
      user: req.user.id
    });

    // save student to database
    await student.save();
    // populate created student
    // student = await Student.populate("createdBy", { user: 0 }).execPopulate();

    return res.json({
      success: true,
      message: "Student created successfully",
      student
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

// @route    PUT api/v1/students/update-student/:id
// @desc     Update student
// @access   Private
router.put("/update-student/:id", auth, async (req, res) => {
  // validate objectID
  const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValidObjectId) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid object id" });
  }

  // check allowed params
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "firstname",
    "lastname",
    "gender",
    "address",
    "qualification",
    "skills",
    "hobies",
    "email",
    "mobile",
    "home"
  ];
  const isValidOperations = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperations) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid API Paramaters" });
  }

  // check empty body
  if (Object.keys(req.body).length < 1) {
    return res
      .status(400)
      .json({ success: false, message: "Fields required in body" });
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
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (!updatedStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }

    return res.json({
      success: true,
      updatedStudent
    });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message40520
    });
  }
});

// @route    DELETE api/v1/students/delete-student/:id
// @desc     delete student
// @access   Private
router.delete("/delete-student/:id", auth, async (req, res) => {
  // validate object ID
  const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValidObjectId) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Object ID" });
  }

  try {
    // search student in database
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res
        .status(400)
        .json({ success: false, message: "Student not found" });
    }

    return res.json({
      success: true,
      message: "Student deleted successfully!"
    });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message40520
    });
  }
});

module.exports = router;
