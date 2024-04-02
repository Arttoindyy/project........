module.exports = (app) => {
    const student = require('../controllers/student.controller');

    const router = require('express').Router();

    //Retrieve all student with setting
    router.get("/", student.findAll);
    //Insert data to student with setting
    router.post("/create-student-setting", student.create);
    //Add student to projects 
    router.post("/create-student-project", student.addStudentToProject);
    //Retrieve an student with setting
    router.get("/edit-student/:id", student.findOne);
    //Update an student with id
    router.put("/update-student/:id", student.update);
    //Delete an student with id
    router.delete("/delete-student/:id", student.delete);

    app.use("/students", router);
};