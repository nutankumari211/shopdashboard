import React from "react";
import "./Header.css";

function Header({ toggleCustomerList }) {
  return (
    <header className="header">
      <h1> Owner Dashboard</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About</a></li>
          <li><a href="/contactus">Contact</a></li>
        </ul>
      </nav>
      <button onClick={toggleCustomerList}>Toggle Customer List</button>
    </header>
  );
}

export default Header;
