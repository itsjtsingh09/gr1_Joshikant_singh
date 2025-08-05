const express = require("express");
const router = express.Router();
const {addStudent, getStudents, updateStudent, deleteStudent, enrollCourse} = require("../controllers/studentController");

router.post("/", addStudent);
router.get("/", getStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.patch("/:id/enroll", enrollCourse);

module.exports = router;
