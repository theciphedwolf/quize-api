const Question = require('./../models/QuestionModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

exports.getQuestion = factory.getOne(Question);
exports.getAllQuestions = factory.getAll(Question);
exports.createQuestion = factory.createOne(Question);

// Do NOT update passwords with this!
exports.updateQuestion = factory.updateOne(Question);
exports.deleteQuestion = factory.deleteOne(Question);

exports.getQuizQuestion = catchAsync(async (req, res, next) => {
  const doc = await Question.find({ quiz: req.params.id });

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { data: doc }
  });
});
