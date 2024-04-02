const db = require("../models");
const Student = db.employee;
const University = db.university;

exports.findAll = (req, res) => {
  University.findAll({
    include: [
        {
            model: Student,
            attributes: ["name"]
        }
    ]
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};
