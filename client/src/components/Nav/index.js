import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navBar">
      <a className="navbar-brand navAnchor" href="/">
        308 Fantasy League 
      </a>
      <a className="navbar-brand navAnchor" href="/rules">
        Rules
      </a>
    </nav>
  );
}

export default Nav;
