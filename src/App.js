import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get("/api/students").then(response => {
      this.setState({
        students: response.data
      });
    });
  }
  render() {
    const { students } = this.state;
    console.log(students);
    const mappedStudents = students.map(student => {
      return (
        <ul key={student.id}>
          <li>{student.name}</li>
          <li>{student.cohort}</li>
          <li>{student.campus}</li>
        </ul>
      );
    });

    return <div className="App">{mappedStudents}</div>;
  }
}

export default App;
