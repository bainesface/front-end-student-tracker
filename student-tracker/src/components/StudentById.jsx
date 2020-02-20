import React, { Component } from "react";
import axios from "axios";
import BlockHistory from "./BlockHistory";
import createBlockHistoryObject from "../__test__/utils";

class StudentById extends Component {
  state = {
    student: {},
    isLoading: true,
    blockHistoryIsVisible: false
  };
  render() {
    const { student, isLoading } = this.state;
    // console.log(student);
    return (
      <main>
        {isLoading ? (
          <p>Loading data...</p>
        ) : (
          <div>
            <h1>Student Info</h1>
            <h2>Name: {student.name}</h2>
            <h3>Starting Cohort: {student.startingCohort}</h3>
            <h3>
              Block:{" "}
              {student.blockHistory[student.blockHistory.length - 1].name}
            </h3>
            <button>Show/Hide Block History</button>
            <h4>Block History:</h4>
            <BlockHistory
              createBlockHistoryObject={createBlockHistoryObject(
                student.blockHistory
              )}
            />
          </div>
        )}
      </main>
    );
  }

  getStudent = () => {
    axios
      .get(
        `http://nc-student-tracker.herokuapp.com/api/students/${this.props.id}`
      )
      .then(({ data }) => {
        this.setState({ student: data.student, isLoading: false });
      });
  };

  componentDidMount() {
    this.getStudent();
  }
}

export default StudentById;
