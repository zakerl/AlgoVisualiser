import React from "react";
import "../stylesheets/nav-item.css"

function NavItem({navItemName}){
  return(<div class = "nav-item right">{navItemName}</div>)
}

export default NavItem