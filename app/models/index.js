const config = require("../config/db");

const Datatype = require("sequelize");
const sequelize = new Datatype(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};
db.Datatype = Datatype;
db.sequelize = sequelize;

db.employee = require("../models/student.model")(sequelize, Datatype);
db.setting = require("../models/setting.model")(sequelize, Datatype);
db.company = require("../models/university.model")(sequelize, Datatype);
db.project = require("../models/information.model")(sequelize, Datatype);

//One to One Relation
db.employee.hasOne(db.setting, {
    onDelete: 'CASCADE'
});
db.setting.belongsTo(db.student);

//One to Many Relation
db.company.hasMany(db.student, {
    onDelete: 'CASCADE'
});
db.employee.belongsTo(db.university);

//Many to Many Relation
db.employee.belongsToMany(db.project, {
    through: "student_project",
    onDelete: 'CASCADE'
});
db.project.belongsToMany(db.employee, {
    through: "student_project",
    onDelete: 'CASCADE'
});

module.exports = db;