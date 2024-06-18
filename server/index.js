const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/iqdegree")
  .then(() => console.log("Connected to IQ Degree ..."))
  .catch(() => console.log("Couldn't connect to IQ Degree"));


const users = require("./routers/Users");
const courses = require("./routers/Courses");
app.use("/api/user", users);
app.use("/api/course", courses);

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}...`));
