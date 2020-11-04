const mongoose = require('mongoose');
const validator = require('validator');


const quizSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please tell us your first name!']
  },
  lastName: {
    type: String,
    required: [true, 'Please tell us your last name!']
  },
    mobileNumber: {
    type: String,
    required: [true, 'Please tell us your mobile number!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  schoolType: {
    type: String,
    required: [true, 'Please provide your school type'],
  },
  subject: {
    type: String,
    required: [true, 'Please provide your subject'],
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'admin'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

const User = mongoose.model('User', quizSchema);

module.exports = User;
