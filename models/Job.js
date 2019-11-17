const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  requirement: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
  // company: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'companies'
  // }
},{
  timestamps: true
});

module.exports = mongoose.model("Job", JobSchema);
