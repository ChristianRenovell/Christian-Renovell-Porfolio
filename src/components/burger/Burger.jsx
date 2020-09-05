import React from "react";
import "./style.css";

export default function Burger(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleOpenMenu() {  
      
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="burg">
      <div
        className={`menu-btn ${menuOpen ? "open" : "closed"}`}
        onClick={handleOpenMenu}
      >
        <div className="burger" />
      </div>
    </div>
  );
}
