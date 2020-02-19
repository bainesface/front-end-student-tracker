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
          Name: <input type="text" required onChange={this.handleChange} />
        </label>
        <label>
          Starting Cohort: <input type="text" required />
        </label>
        <button>Add student</button>
      </form>
    );
  }
}

export default AddNewStudent;
