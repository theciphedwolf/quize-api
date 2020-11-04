const fs = require('fs');
const SGS = require('./../models/studentGroupModel');
const Papa = require('papaparse');
const fileParser = require('./../utils/fileParser');

exports.saveStudents = async (req, res) => {
  const c = fs.readFileSync(req.file.path, 'utf8');
  console.log(req.body);
  const data = fileParser(c);
  let arr = [];
  arr.push(
    data.data.map(
      el =>
        new Object({
          name: el[0],
          rollnumber: el[0],
          phoneNo: el[2],
          section: el[3]
        })
    )
  );

  // const newAllowence = await SGS.create({
  //   title: 'Student Group',
  //   students: arr,
  //   teacher: req.teacher
  // });

  res.status(200).json({
    status: 'success',
    data: {
      arr
    }
  });
};
