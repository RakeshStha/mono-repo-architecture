import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" style={{ margin: "0 10px 0 10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 10px 0 10px" }}>
        About
      </Link>
      <Link to="/contact" style={{ margin: "0 10px 0 10px" }}>
        Contact
      </Link>
      <Link to="/faq" style={{ margin: "0 10px 0 10px" }}>
        FAQ
      </Link>
    </nav>
  );
};

export default Navbar;
