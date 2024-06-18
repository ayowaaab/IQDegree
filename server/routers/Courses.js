const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Course = require('../models/Course');

router.get("/", async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
});

module.exports = router;
