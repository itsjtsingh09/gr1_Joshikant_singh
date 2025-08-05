const express = require("express");
const router = express.Router();
const courseCtrl = require("../controllers/courseController");

router.post("/", courseCtrl.createCourse);

module.exports = router;

