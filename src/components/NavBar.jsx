import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul id="nav-list">
        <li className="nav-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/topics">Topics</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <div id="avatar-wrapper">
        <img
          id="user-avatar"
          src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png?f=avif&w=256"
          alt="user-avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
