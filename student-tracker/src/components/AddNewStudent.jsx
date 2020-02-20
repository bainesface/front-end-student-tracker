import React, { Component } from 'react';
import axios from 'axios';

class AddNewStudent extends Component {
  state = {
    name: '',
    startingCohort: ''
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add new student:</h2>
        <label>
          Name:{' '}
          <input
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
        </label>
        <label>
          Starting Cohort:{' '}
          <input
            type="number"
            required
            onChange={this.handleChange}
            value={this.state.startingCohort}
            name="startingCohort"
          />
        </label>
        <button>Add student</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const { name, startingCohort } = this.state;
    event.preventDefault();
    axios
      .post('http://nc-student-tracker.herokuapp.com/api/students', {
        name: name,
        startingCohort: startingCohort
      })
      .then(({ data }) => {
        console.log(data.student);
        this.props.addStudent(data.student);
        this.setState({ name: '', startingCohort: '' });
      })
      .catch(console.log);
  };
}

export default AddNewStudent;
