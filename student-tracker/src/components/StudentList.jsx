import React from 'react';
import { Link } from '@reach/router';

function StudentList(props) {
  const { students } = props;
  return (
    <div>
      <h3>Current Students</h3>
      <ul>
        {students.map(eachStudent => {
          return (
            <li key={eachStudent._id}>
              {eachStudent.currentBlock === 'grad' ? (
                <Link to={`/students/${eachStudent._id}`}>
                  {eachStudent.name}🎓
                </Link>
              ) : (
                <Link to={`/students/${eachStudent._id}`}>
                  {eachStudent.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StudentList;
