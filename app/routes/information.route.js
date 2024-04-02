module.exports = (app) => {
    const information = require('../controllers/information.controller');

    const router = require('express').Router();

    router.get("/", information.findAll);

    app.use("/infotmation", router);
};