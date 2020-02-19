import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/students">All Students</Link>
    </nav>
  );
};

export default Nav;
