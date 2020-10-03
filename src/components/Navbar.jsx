import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h2>Kanti Web Project</h2>
      <ul>
        <Link to="/Home">
          <li>Home</li>
        </Link>
        <Link to="/Questions/1">
          <li>IMS EignungsTest</li>
        </Link>
        <Link to="/QuestionStatic">
          <li>Question Static</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}
