import React from "react";
import { Link } from "@reach/router";

function StudentList(props) {
  const { students } = props;
  return (
    <ol>
      {students.students.map(eachStudent => {
        return (
          <li key={eachStudent._id}>
            <Link to={`/students/${eachStudent._id}`}>{eachStudent.name}</Link>
          </li>
        );
      })}
    </ol>
  );
}

export default StudentList;
