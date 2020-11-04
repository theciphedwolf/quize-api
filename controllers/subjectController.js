const Subject = require('./../models/subjectModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

exports.getSubject = factory.getOne(Subject);
exports.getAllSubjects = factory.getAll(Subject);
exports.createSubject = factory.createOne(Subject);

// Do NOT update passwords with this!
exports.updateSubject = factory.updateOne(Subject);
exports.deleteSubject = factory.deleteOne(Subject);
