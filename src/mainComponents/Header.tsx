import React from "react";
import Button from "../mainComponents/Button";

function Header() {
  return (
    <header className="w3-card">
      <div className="w3-bar w3-padding w3-theme-d5">
        <a href="#checkpoints" className="w3-bar-item w3-button">
          <b>✓P</b> Checkpoints
        </a>
        <div className="w3-right">
          <Button label="Login" />
          <Button label="New List" />
          <Button label="123 ✓P" />
        </div>
      </div>
    </header>
  );
}

export default Header;
