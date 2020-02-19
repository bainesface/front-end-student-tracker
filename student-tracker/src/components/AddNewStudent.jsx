import React, { Component } from "react";

class AddNewStudent extends Component {
  state = {
    name: "",
    startingCohort: ""
  };
  render() {
    return (
      <form>
        <h2>Add new student:</h2>
        <label>
          Name:{" "}
          <input
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
        </label>
        <label>
          Starting Cohort:{" "}
          <input
            type="text"
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
    console.log(event.target.name, "event");
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state.name, this.state.startingCohort, "***");
    });
  };
}

export default AddNewStudent;
