const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema(
  {
    quiz: {
      type: mongoose.Schema.ObjectId,
      refs: 'quizzes'
    },
    info: { type: Object },
    date: { type: Date },
    totalMarks: { type: Number },
    obtainedMarks: { type: Number },
    status: { type: String, enum: ['passed', 'failed'] }
  },
  { timestamps: { createdAt: 'created_at' } }
);

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
