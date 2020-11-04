const Quiz = require('./../models/quizModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

exports.getQuiz = factory.getOne(Quiz);
exports.getAllQuizs = factory.getAll(Quiz);
exports.createQuiz = factory.createOne(Quiz);
// Do NOT update passwords with this!
exports.updateQuiz = factory.updateOne(Quiz);
exports.deleteQuiz = factory.deleteOne(Quiz);
