const db = require("../models");
const Student = db.Student;
const Setting = db.setting;
const University = db.university;
const Information = db.information;
const Student_project = db.information;

exports.findAll = (req, res) => {
  try {
    Student.findAll({
      attributes: ["id", "name", ""],
      include: [
        {
          model: Setting,
          attributes: ["theme"],
        },
        {
          model: Student,
          attributes: ["name"],
        },
        {
          model: University,
          attributes: ["name"],
        },
        {
          model: Information,
          attributes: ["name"],
        }
      ],
    })
      .then((student) => {
        res.status(200).json(student);
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (e) {
    console.log(e);
  }
};

exports.create = (req, res) => {
  try {
    if (!req.body.name | !req.body.position) {
      res.status(400).json({ message: "cannot empty!" });
      return;
    }

    const studentObj = {
      name: req.body.name,
      positiontion: req.body.position,
      universityId: req.body.universityId,
    };

    Student.create(studentObj)
      .then((data) => {
        // Insert to Setting
        Setting.create({
          theme: req.body.theme,
          studentId: data.id,
        });
        res.status(200).json({ message: "employee created." });
      })
      .catch((error) => {
        res.status(400).json({ message: "error occured!" });
      });
  } catch (error) {
    res.sendStatus(500);
  }
};

exports.addStudentToProject = (req, res) => {
  const functionAttributes = {
    studentId: req.body.studentId,
    ioformationId: req.body.informationId
  }
};
  Student_project.create(junctionAttributes)
  .then(res.status(200).json({ message: "Employee project created."}))
  .catch(error => res.status(400).json({ message: error.message}));

exports.findOne = (req, res) => {
  try {
    const id = req.params.id;
    Student.findByPk(id, {
      include: [
        {
          model: university,
          attributes: ["name"],
        },
      ],
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  } catch (error) {
    //console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.update = (req, res) => {
  try {
    //const id = req.params.id;

    const studentObj = {
      name: req.body.name,
      position: req.body.position,
    };

    Student.update(employeeObj, {
      where: { id: req.params.id },
    })
      .then((data) => {
        if (data == 1) {
          res.status(200).json({ message: "Updated successfully." });
        }
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = (req, res) => {
  try {
    Student.destroy({ where: { id: req.params.id } })
      .then((data) => {
        if (data == 1) {
          res.status(200).json({ message: "Deleted succesfully." });
        }
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
