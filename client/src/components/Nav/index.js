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
      <a className="navbar-brand navAnchor" href="/draftorder">
        Draft Order Generator
      </a>
      <a className="navbar-brand navAnchor" href="/sackoformula">
        Sacko Formula
      </a>
    </nav>
  );
}

export default Nav;
