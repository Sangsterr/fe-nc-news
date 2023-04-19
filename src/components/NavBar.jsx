import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
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
      {/* <img
        className="basket-icon"
        src="https://freeiconshop.com/wp-content/uploads/edd/cart-outline.png"
        alt="basket-icon"
      /> */}
    </nav>
  );
};

export default Navbar;
