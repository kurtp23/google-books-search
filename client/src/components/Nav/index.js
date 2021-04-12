import React from "react";

function Nav() {
  return (
    <nav className="navbar  has-background-primary " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item has-text-white" href="https://bulma.io">
          React Google Books Seach
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end"></div>
      </div>
    </nav>
  );
}

export default Nav;
