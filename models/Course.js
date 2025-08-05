const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String
});

let Course = mongoose.model("Course", courseSchema);
module.exports = Course;
