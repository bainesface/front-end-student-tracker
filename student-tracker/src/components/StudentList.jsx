import React from 'react';
import { Link } from '@reach/router';

function StudentList(props) {
  const { students } = props;
  return (
    <div>
      <h3 className="currentStudentsHeader">Current Students</h3>{' '}
      <p className="clickForDetails">Click on student for more details</p>
      <ul className="studentList">
        {students.map(eachStudent => {
          return (
            <li key={eachStudent._id}>
              {eachStudent.currentBlock === 'grad' ? (
                <Link to={`/students/${eachStudent._id}`}>
                  {eachStudent.name} 🎓
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
