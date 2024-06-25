const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid Email Patterns !"],
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    enum: ["student", "parent", "instructor", "admin"],
    default: "student",
    required: true,
  },
  profile_picture: {
    type: String,
    default: "default.png",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.getAuthToken = function () {
  return jwt.sign(
    { _id: this._id, roles: this.roles },
    config.get("jwtPrivateToken")
  );
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    profile_picture: Joi.string(),
    roles: Joi.string()
      .valid("student", "parent", "instructor", "admin")
      .required(),
  });
  return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;
