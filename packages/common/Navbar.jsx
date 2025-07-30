import React from "react";

const Navbar = () => {
  return (
    <nav>
      <a href="/" style={{ margin: "0 10px 0 10px" }}>
        Home
      </a>
      <a href="/about" style={{ margin: "0 10px 0 10px" }}>
        About
      </a>
      <a href="/contact" style={{ margin: "0 10px 0 10px" }}>
        Contact
      </a>
      <a href="/faq" style={{ margin: "0 10px 0 10px" }}>
        FAQ
      </a>
    </nav>
  );
};

export default Navbar;
