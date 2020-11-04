const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'tmp/csv/' });
const dataController = require('./../controllers/dataController');
const router = express.Router();

router.post(
  '/studentGroup',
  upload.single('file'),
  dataController.saveStudents
);

module.exports = router;
