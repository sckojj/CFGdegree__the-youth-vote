import "../components-styling/NavBar.css"

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/vote">Vote</Link>
        </li>
        <li>
          <Link to="/results">Results</Link>
        </li>
        <li>
          <Link to="/learn-more">Learn More</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;