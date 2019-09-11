import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header style={headerStyle}> What To Do?</header>
      <Link to="/">home </Link> <Link to="/about">About</Link>
    </div>
  );
}
const headerStyle = {
  background: "black",
  color: "white",
  fontSize: 32,
  textAlign: "center",
  width: 241
};

export default Header;
