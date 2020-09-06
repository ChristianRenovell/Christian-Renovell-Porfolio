import React from "react";
import "./style.css";

export default function Burger(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  let burger;
 

  if(props.mode==="light"){
    burger = "burger";
 
  }
  if(props.mode==="darck"){
    burger = "burger2";
   
  }


  function handleOpenMenu() {  
      
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="burg" >
      <div
        className={`menu-btn ${menuOpen ? "open" : "closed"}`}
        onClick={handleOpenMenu}
        
      >
        <div className={burger}/>
      </div>
    </div>
  );
}
