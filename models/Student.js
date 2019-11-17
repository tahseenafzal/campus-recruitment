const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    default: 'male'
  },
  address: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  qualification: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  skills: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  hobies: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  mobile: {
    type: Number,
    required:true,
    trim: true
  },
  home: {
    type: Number,
    required:true,
    trim: true
  }
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'users'
  // }
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Student', StudentSchema);