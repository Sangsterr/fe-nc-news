import React from "react";

import { Link } from "react-router-dom";

const Navbar = ({ userAvatar }) => {
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
        <li className="nav-list-item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <div id="avatar-wrapper">
        <img id="user-avatar" src={userAvatar} alt="user-avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
