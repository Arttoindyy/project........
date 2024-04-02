const db = require("../models");
const Student = db.student;
const Information = db.information;

exports.findAll = (req, res) => {
  Information.findAll({
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
