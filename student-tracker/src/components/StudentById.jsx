import React, { Component } from 'react';
import axios from 'axios';
import BlockHistory from './BlockHistory';
import createBlockHistoryObject from '../__test__/utils';
import ToggleContent from './ToggleContent';

class StudentById extends Component {
  state = {
    student: {},
    isLoading: true,
    blockHistoryIsVisible: false
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
            <h3>Student ID: {student._id}</h3>
            <h3>Starting Cohort: {student.startingCohort}</h3>
            <h3>
              Block:{' '}
              {student.blockHistory[student.blockHistory.length - 1].name}
            </h3>
            <button
              className="button"
              onClick={() => {
                this.deleteStudent(student._id);
              }}
            >
              Delete Student
            </button>
            <ToggleContent>
              <BlockHistory
                createBlockHistoryObject={createBlockHistoryObject(
                  student.blockHistory
                )}
              />
            </ToggleContent>
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

  deleteStudent = id => {
    axios
      .delete(`http://nc-student-tracker.herokuapp.com/api/students/${id}`)
      .then(() => {
        this.setState(previousState => {
          return {
            student: {
              ...previousState.student,
              name: 'student has been deleted'
            }
          };
        });
      });
  };

  componentDidMount() {
    this.getStudent();
  }
}

export default StudentById;
