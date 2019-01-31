const express = require("express");
const bodyParser = require("body-parser");
const massive = require('massive');
const app = express();
const controller = require("./controllers/studentController")

require('dotenv').config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then((db) => {
    app.set("db", db);
    db.init();
    console.log("connected to db");
    // db.query("select * from students").then(students => console.log(students))
  });

app.get("/api/students", controller.getStudents);

app.post("/api/students", controller.postStudent);

app.put("/api/students/:student_id/:cohort", controller.updateStudent);

app.delete("/api/students/:student_id", controller.deleteStudent);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
