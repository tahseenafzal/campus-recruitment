const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobAppliedSchema = new Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'companies'
  },
  student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'students'
  }
},{
  timestamps: true
});

module.exports = mongoose.model("JobApplied", JobAppliedSchema);
