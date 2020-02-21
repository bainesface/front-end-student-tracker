// import React from 'react';

// const ToggleContent = props => {
//   console.log(props.blockHistoryIsVisible);
//   return (
//     <div>
//       <button onClick={this.toggleVisibility}>Show Block History</button>
//     </div>
//   );

//   toggleVisibility = () => {

//   }
// };

import React, { Component } from 'react';

class ToggleContent extends Component {
  state = {
    isContentDisplayed: false
  };

  render() {
    console.log(this.props.children);
    console.log(this.state);
    return (
      <div>
        <button onClick={this.toggleVisibility}>Show Block History</button>
        {this.state.isContentDisplayed ? (
          <p>content is true</p>
        ) : (
          <p>content is false</p>
        )}
      </div>
    );
  }

  toggleVisibility = event => {
    console.log('here');
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
