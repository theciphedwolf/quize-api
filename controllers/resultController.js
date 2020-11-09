const Result = require('./../models/resultModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

exports.getResult = factory.getOne(Result);
exports.getAllResults = factory.getAll(Result);
exports.createResult = factory.createOne(Result);
// Do NOT update passwords with this!
exports.updateResult = factory.updateOne(Result);
exports.deleteResult = factory.deleteOne(Result);
