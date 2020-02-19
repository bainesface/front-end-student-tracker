import React, { Component } from "react";
import AddNewStudent from "./AddNewStudent";

class Home extends Component {
  render() {
    return (
      <main>
        <h1>Welcome to NC Students Tracker</h1> <hr />
        <AddNewStudent />
      </main>
    );
  }
}

export default Home;
