const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { verifyPassword } = require("../utils/hash");
const Joi = require("joi");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  const test = await verifyPassword(req.body.password, user.password);
  if (!test) return res.status(400).send("Invalid email or password");

  const token = user.getAuthToken();
  res.status(200).send(token);
});

function validate(user) {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  });
  return schema.validate(user);
}

module.exports = router;
