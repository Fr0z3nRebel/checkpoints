import React from "react";

function Header() {
  return (
    <header className="w3-card">
      <div className="w3-bar w3-padding w3-theme-d5">
        <a href="#home" className="w3-bar-item w3-button">
          <b>✓P</b> Checkpoints
        </a>
        <div className="w3-right">
          <a href="#login" className="w3-bar-item w3-button">
            Login
          </a>
          <a href="#newList" className="w3-bar-item w3-button">
            New List
          </a>
          <a href="#points" className="w3-bar-item w3-button">
            123 ✓P
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
