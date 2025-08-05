const Student = require("../models/Student");

let addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

let getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("courses");
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

let updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).send("Student not found");
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

let deleteStudent = async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send("Student not found");
    res.send("Student deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

let enrollCourse = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send("Student not found");

    const courseId = req.body.courseId;
    if (!student.courses.includes(courseId)) {
      student.courses.push(courseId);
      await student.save();
    }

    res.send("Course enrolled successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {addStudent, getStudents, updateStudent, deleteStudent, enrollCourse};