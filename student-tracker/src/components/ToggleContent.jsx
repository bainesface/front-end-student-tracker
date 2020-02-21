import React, { Component } from "react";

class ToggleContent extends Component {
  state = {
    isContentDisplayed: false
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>Show Block History</button>
        {this.state.isContentDisplayed && <div>{this.props.children}</div>}
      </div>
    );
  }

  toggleVisibility = event => {
    this.setState(
      currentState => {
        return { isContentDisplayed: !currentState.isContentDisplayed };
      },
      () => {
        console.log(this.state);
      }
    );
  };
}

export default ToggleContent;
