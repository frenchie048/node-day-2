module.exports = {
  getStudents: (req, res) => {
    const db = req.app.get("db");

    // show how this works, talk about sql injection and how massive requires second argument to avoid injection. dont template literal your queies

    // db.query("SELECT * FROM students")
    // .then(response => {
    //   res.status(200).json(response);
    // })
    // .catch(err => console.log(err));

    db.get_students()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err));
  },
  postStudent: (req, res) => {
    //   create table students (
    //     ID SERIAL PRIMARY KEY
    //     , name VARCHAR(64) NOT NULL
    //     , cohort INTEGER NOT NULL
    //     , campus TEXT references campus_data(campus)
    // );

    const db = req.app.get("db");
    const { name, cohort, campus } = req.body;
    // show how this works, talk about sql injection and how massive requires second argument to avoid injection. dont template literal your queies
    db.post_student([name, cohort, campus])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.send(err.detail));
  },
  updateStudent: (req, res) => {
    const db = req.app.get("db");
    const { student_id, cohort } = req.params;
    // show how this works, talk about sql injection and how massive requires second argument to avoid injection. dont template literal your queies
    console.log(student_id, cohort);
    db.update_student([student_id, cohort])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err.detail));
  },
  deleteStudent: (req, res) => {
    const db = req.app.get("db");
    const { student_id } = req.query;

    db.delete_student(student_id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err.detail));
  }
};
