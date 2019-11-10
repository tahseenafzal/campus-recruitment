const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    },
    usertype: {
      type: String,
      required: true,
      trim: true,
      default: 'student'
    }
}, {
    timestamps: true
});
 
module.exports = mongoose.model('User', UserSchema);