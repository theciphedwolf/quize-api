const mongoose = require('mongoose');
const validator = require('validator');
const studentGroupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: ['true', 'Please Enter Group Name']
  },
  students: {
    type: [],
    required: ['true', 'Please Enter Student List']
  },
  teacher: {
    type: mongoose.Schema.ObjectId,
    ref: 'teacher'
  }
});

const SGS = mongoose.model('studentGroups', studentGroupSchema);

module.exports = SGS;
