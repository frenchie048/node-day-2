const express = require("express");
const bodyParser = require("body-parser");
// add massive
const massive = require("massive");
const app = express();

// import controller file
const studentController = require("./controllers/studentController");

require("dotenv").config();

app.use(bodyParser.json());
// connect to database by showing both dotenv way and passing it in directly
massive(process.env.CONNECTION_STRING).then(db => {
  // can console log the db
  app.set("db", db);

  // db.query("SELECT * FROM students").then(response => console.log(response));
  console.log("connected to database");
});

app.get("/api/students", studentController.getStudents);
app.post("/api/students", studentController.postStudent);
app.put("/api/students/:student_id/:cohort", studentController.updateStudent);
app.delete("/api/students", studentController.deleteStudent);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
