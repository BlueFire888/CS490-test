import React from 'react';
import './Header.css'; // Import the CSS file for styles

function Header() {
  return (
    <header className="header">
      <h1 className="customer-name">Customer Name</h1>
      <button className="logout-button">Log Out</button>
    </header>
  );
}

export default Header;
