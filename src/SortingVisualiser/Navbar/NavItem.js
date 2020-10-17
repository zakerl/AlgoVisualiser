import React from "react";
import "../stylesheets/nav-item.css"

function NavItem({navItemName, parentFunction}){
  return(<div onClick = {parentFunction} className = "nav-item right">{navItemName}</div>)
}

export default NavItem