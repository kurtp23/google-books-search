import React from "react";

function Nav() {
  return (
    <nav class="navbar  has-background-primary " role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item has-text-white" href="https://bulma.io">
          React Google Books Seach
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end"></div>
      </div>
    </nav>
  );
}

export default Nav;
