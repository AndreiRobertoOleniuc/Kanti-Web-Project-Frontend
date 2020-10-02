import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h2>Kanti Web Project</h2>
      <ul className="nav-links">
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <Link className="link" to="/Questions/1">
          <li>IMS EignungsTest</li>
        </Link>
        <Link className="link" to="/QuestionStatic">
          <li>Question Static</li>
        </Link>
        <Link className="link" to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}
