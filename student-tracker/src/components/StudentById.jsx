import React, { Component } from 'react';
import axios from 'axios';

class StudentById extends Component {
  state = {
    student: {},
    isLoading: true
  };
  render() {
    const { student, isLoading } = this.state;
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
              Block:{' '}
              {student.blockHistory[student.blockHistory.length - 1].name}
            </h3>
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
