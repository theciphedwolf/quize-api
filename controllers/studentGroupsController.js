const StudentGroup = require('./../models/studentGroupModel');

const factory = require('./handlerFactory');

exports.getStudentsGroup = factory.getOne(StudentGroup);
exports.getAllStudentsGroups = factory.getAll(StudentGroup);
exports.createStudentsGroup = factory.createOne(StudentGroup);
exports.updateStudentsGroup = factory.updateOne(StudentGroup);
exports.deleteStudentsGroup = factory.deleteOne(StudentGroup);
