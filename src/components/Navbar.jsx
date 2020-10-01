import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h2>Kanti Web Project</h2>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/Questions/1">
          <li>IMS EignungsTest</li>
        </Link>
        <Link style={navStyle} to="/QuestionStatic">
          <li>Question Static</li>
        </Link>
        <Link style={navStyle} to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}
