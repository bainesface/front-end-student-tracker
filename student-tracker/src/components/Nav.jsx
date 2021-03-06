import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">Home </Link>
      <Link to="/students">Students</Link>
    </nav>
  );
};

export default Nav;
