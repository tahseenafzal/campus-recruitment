const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  address: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  person: {
    type: String,
    trim: true,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: Number,
    required:true,
    trim: true
  },
  fax: {
    type: Number,
    required:true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'users'
  // }
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Company', CompanySchema);