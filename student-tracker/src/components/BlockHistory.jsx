import React from 'react';

const BlockHistory = props => {
  const { createBlockHistoryObject } = props;
  return (
    <div>
      <h4>Block History:</h4>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Times taken</th>
          </tr>
        </thead>
        {Object.keys(createBlockHistoryObject).map(key => {
          return (
            <tbody key={key}>
              <tr key={key}>
                <td key={key}>{key} </td>
                <td> {createBlockHistoryObject[key]} </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default BlockHistory;
