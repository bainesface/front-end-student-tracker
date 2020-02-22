import React, { Component } from 'react';
import StudentList from './StudentList';
import AddNewStudent from './AddNewStudent';
import Dropdown from './Dropdown';
import axios from 'axios';

class Students extends Component {
  state = {
    students: [],
    isLoading: true,
    searchValue: ''
  };
  render() {
    return (
      <div>
        <Dropdown
          Dropdown={Dropdown}
          changeSearchValue={this.changeSearchValue}
        />
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
      .get(`http://nc-student-tracker.herokuapp.com/api/students`)
      .then(({ data }) => {
        this.setState({ students: data.students, isLoading: false });
      })
      .catch(console.log);
  };

  componentDidMount() {
    this.getStudents();
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.state;
    if (prevState.searchValue !== this.state.searchValue) {
      axios
        .get(
          `http://nc-student-tracker.herokuapp.com/api/students?block=${searchValue}`
        )
        .then(({ data }) => {
          this.setState({ students: data.students });
        })
        .catch(console.log);
    }
  }

  addStudent = newStudent => {
    this.setState(currentState => {
      return { students: [newStudent, ...currentState.students] };
    });
  };

  changeSearchValue = value => {
    this.setState({ searchValue: value });
  };
}

export default Students;
