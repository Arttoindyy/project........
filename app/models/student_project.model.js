module.exports = (sequelize, DataType) => {
    const db = require(".");
    const Student = db.student;
    const Information = db.information;

    const Student_project = sequelize.define("Student_project", {
        studentId: {
            type: DataType.INTEGER,
            references: {
                model: Student,
                key: 'id'
            }
        },
        informationId: {
            type: DataType.INTEGER,
            references: {
                model: Information,
                key: 'id'
            }
        }
    });
    return Student_project;
};