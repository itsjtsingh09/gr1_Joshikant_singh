const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number,
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }]
});

module.exports = mongoose.model("Student", studentSchema);
