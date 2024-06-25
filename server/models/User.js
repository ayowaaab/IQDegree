const mongoose = require("mongoose");
const Joi = require("joi");

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
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    enum: ["student", "parent", "instructor", "admin"],
    required: true,
  },
  profile_picture: {
    type: String,
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

// ! userSchema.model.issmo = function name(){}

const User = mongoose.model("User", userSchema);

function validateUser(user){
  const schema = Joi.object({
    name:Joi.string().required().min(3).max(30),
    email:Joi.email().required(),
    password:Joi.string().required().min(8),
  })
  return schema.validate(user);
}


module.exports.User = User;
module.exports.validate = validateUser;
