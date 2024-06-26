const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());

app.use(cors({
  origin:"http://localhost:5173"
}))


const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/iqdegree")
  .then(() => console.log("Connected to IQ Degree ..."))
  .catch(() => console.log("Couldn't connect to IQ Degree"));


const auth = require("./routers/auth");
const users = require("./routers/Users");
const courses = require("./routers/Courses");

app.use("/api/users", users);
app.use("/api/courses", courses);
app.use("/api/auth", auth);

require('dotenv').config();
const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}...`));
