module.exports = (app) => {
    const university = require('../controllers/university.controller');

    const router = require('express').Router();

    router.get("/", university.findAll);

    app.use("/universities", router);
};