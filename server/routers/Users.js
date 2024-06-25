const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const _ = require("lodash");
const { User, validate } = require("../models/User");
const { hashPassword } = require("../utils/hash");

router.get("/me", auth, async (req, res) => {
  res.send(req.user);
});
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);
  const verify = User.findOne({ email: req.body.email });
  if (verify) return res.status(400).send("This email already exist");
  const hashed = await hashPassword(req.body.password);
  req.body.password = hashed;
  let user = new User(
    _.pick(req.body, ["name", "email", "password", "role", "profile_picture"])
  );
  user = await user.save();
  res.status(200).send(_.pick(user, ["name", "email", "role"]));
});

module.exports = router;
