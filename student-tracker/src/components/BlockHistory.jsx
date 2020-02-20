// import React, { Component } from "react";

// class BlockHistory extends Component {
//   state = {};
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.blockHistory.map(eachBlock => {
//             return (
//               <li key={eachBlock._id}>
//                 <p>{eachBlock.name}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }

// }

import React from "react";

const BlockHistory = props => {
  const { createBlockHistoryObject } = props;
  return (
    <div>
      <table>
        <tr>
          <th>Block</th>
          <th>Times taken</th>
        </tr>
        {Object.keys(createBlockHistoryObject).map(key => {
          return (
            <tr>
              <td key={key}>{key} </td>
              <td> {createBlockHistoryObject[key]} </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default BlockHistory;

// export default BlockHistory;
