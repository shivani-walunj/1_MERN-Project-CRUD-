import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <Link to="/">Product Store 🛒</Link>
      </div>
      <div className="navbar-actions">
        <Link to="/create">
          <button className="icon-button">➕</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
