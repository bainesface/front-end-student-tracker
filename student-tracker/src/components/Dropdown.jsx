import React, { Component } from 'react';

class Dropdown extends Component {
  state = { block: '' };

  render() {
    return (
      <div className="dropdown">
        <label className="filterStudents" htmlFor="block">
          Select students by block >{' '}
        </label>
        <select
          onChange={this.handleChange}
          value={this.state.block}
          className="dropwdownOptions"
        >
          <option value="">All</option>
          <option value="fun">Fundamentals</option>
          <option value="be">Back End</option>
          <option value="fe">Front End</option>
          <option value="proj">Project</option>
          <option value="grad">Graduated</option>
        </select>
      </div>
    );
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ block: value });
    this.props.changeSearchValue(value);
  };
}
export default Dropdown;
