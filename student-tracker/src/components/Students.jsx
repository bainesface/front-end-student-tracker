import React, { Component } from "react";
import StudentList from "./StudentList";
import axios from "axios";

class Students extends Component {
  state = {
    students: [
      {
        _id: "5bd0755a064fe4246d4975b9",
        name: "Macey Watsica",
        startingCohort: 11,
        blockHistory: [
          {
            _id: "5bd0755a064fe4246d4975b2",
            number: 1,
            name: "Fundamentals",
            slug: "fun"
          },
          {
            _id: "5bd0755a064fe4246d4975b2",
            number: 1,
            name: "Fundamentals",
            slug: "fun"
          },
          {
            _id: "5bd0755a064fe4246d4975b3",
            number: 2,
            name: "Back End",
            slug: "be"
          }
        ],
        __v: 0
      }
    ],
    isLoading: true
  };
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <StudentList students={this.state.students} />
        )}
      </div>
    );
  }

  getStudents() {
    axios
      .get("http://nc-student-tracker.herokuapp.com/api/students")
      .then(({ data }) => {
        this.setState({ students: data, isLoading: false });
      })
      .catch(console.log);
  }
  componentDidMount() {
    this.getStudents();
  }
}

export default Students;
