const express = require("express");
const router = express.Router();
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const Company = require("../models/Company");
const auth = require("../middleware/auth");

// create API params schema for validation
const postApiParamsSchema = Joi.object({
  name: Joi.string()
    .trim()
    .required(),
  address: Joi.string()
    .trim()
    .required(),
  person: Joi.string()
    .trim()
    .required(),
  email: Joi.string()
    .trim()
    .required(),
  phone: Joi.string()
    .trim()
    .required(),
  fax: Joi.string().trim(),
  url: Joi.string().trim()
});

// @route    GET api/v1/companies/get-companies
// @desc     Get companies
// @access   Private
router.get("/get-companies", auth, async (req, res) => {
  try {
    
    const companies = await Company.find({})

    // check company if not created by user
    if (companies.length < 1) {
      return res.json({
        success: true,
        message: "there is no company data in database!"
      });
    }

    return res.json({
      success: true,
      companies
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

// @route    POST api/v1/companies/create-company
// @desc     Create company
// @access   Private
router.post("/create-company", auth, async (req, res) => {
  // destructure body
  const { name, address, person, email, phone, fax, url } = req.body;

  // validate api params
  const { error } = postApiParamsSchema.validate({
    name, 
    address,
    person,
    email,
    phone,
    fax,
    url
  });
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }

  try {
    // create company
    let company = await new Company({
      name,
      address,
      person,
      email,
      phone,
      fax,
      url,
      user: req.user.id
    });

    // save company to database
    await company.save();
    // populate created company
    // company = await company.populate("createdBy", { password: 0 }).execPopulate();

    return res.json({
      success: true,
      message: "Company created successfully",
      company
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

// @route    PUT api/v1/companies/update-company/:id
// @desc     Update company
// @access   Private
router.put("/update-company/:id", auth, async (req, res) => {
  // validate objectID
  const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValidObjectId) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid object id" });
  }

  // check allowed params
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "address", "pserson", "email", "phone", "fax", "url"];
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
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedCompany) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    }

    return res.json({
      success: true,
      updatedCompany
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

// @route    DELETE api/v1/companies/delete-company/:id
// @desc     delete company
// @access   Private
router.delete("/delete-company/:id", auth, async (req, res) => {
  // validate object ID
  const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValidObjectId) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Object ID" });
  }

  try {
    // search company in database
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    if (!deletedCompany) {
      return res
        .status(400)
        .json({ success: false, message: "Company not found" });
    }

    return res.json({ success: true, message: "Company deleted successfully!" });
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
