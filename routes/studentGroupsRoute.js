const express = require('express');
const studentGroupController = require('./../controllers/studentGroupsController.js');
const router = express.Router();

router
  .route('/')
  .get(studentGroupController.getAllStudentsGroups)
  .post(studentGroupController.createStudentsGroup);

router
  .route('/:id')
  .get(studentGroupController.getStudentsGroup)
  .patch(studentGroupController.updateStudentsGroup)
  .delete(studentGroupController.deleteStudentsGroup);

module.exports = router;
