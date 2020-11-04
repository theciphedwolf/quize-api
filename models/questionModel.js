const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  quiz: {
    type: mongoose.Schema.ObjectId,
    refs: 'quizzes'
  },
  title: { type: String },
  options: { type: [] },
  image: {
    type: String
  },
  correctAnswer: {
    type: String
  },
  points: { type: Number },
  pointsForIncorrect: {
    type: Number
  },
  skip: { type: Boolean },
  terminateIfWrong: {
    type: Boolean
  },
  possibleMax: {
    type: Number
  },
  type: {
    type: String
  },
  qqc: {
    type: String
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
