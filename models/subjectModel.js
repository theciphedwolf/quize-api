const mongoose = require('mongoose');
const validator = require('validator');

const subjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: ['true', 'Please Enter Book Name']
  }
});

const Subject = mongoose.model('subjects', subjectSchema);

module.exports = Subject;
