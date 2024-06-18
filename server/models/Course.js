const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  grade_level: {
    type: String,
    required: true,
  },
  instructor_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  syllabus: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
