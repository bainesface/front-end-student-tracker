import React, { Component } from 'react';
import StudentList from './StudentList';
import AddNewStudent from './AddNewStudent';
import axios from 'axios';

class Students extends Component {
  state = {
    students: [],
    isLoading: true
  };
  render() {
    return (
      <div>
        <AddNewStudent addStudent={this.addStudent} />
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <StudentList students={this.state.students} />
        )}
      </div>
    );
  }

  getStudents = () => {
    axios
      .get('http://nc-student-tracker.herokuapp.com/api/students')
      .then(({ data }) => {
        this.setState({ students: data.students, isLoading: false });
      })
      .catch(console.log);
  };

  componentDidMount() {
    this.getStudents();
  }

  addStudent = newStudent => {
    this.setState(currentState => {
      return { students: [newStudent, ...currentState.students] };
    });
  };
}

export default Students;
