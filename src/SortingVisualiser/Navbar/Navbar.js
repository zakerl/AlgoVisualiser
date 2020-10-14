import React from "react";
import NavItem from "./NavItem"
import "../stylesheets/navbar.css"

function Navbar({parentMethod}){
  return(
    <div className="navbar">
      <div onClick={parentMethod} class = "nav-item">Generate New Array</div>
      <NavItem navItemName = "Selection-Sort"/>
      <NavItem navItemName = "Bubble-Sort "/>
    </div>
  )
}
export default Navbar