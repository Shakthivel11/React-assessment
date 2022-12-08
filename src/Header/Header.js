import "../Styles/Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function Header() {
  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setIcon(!icon);
  };
  const closeSideDrawer = () => {
    setIcon(false);
  };
  return (
    
      <nav className="navbar">
        
        
         <div className="imply">imply</div> 
        
      
   
        <div className="menu-icon" onClick={handleClick}>
          {icon ? (
            <FaTimes className="fa-times"></FaTimes>
          ) : (
            <FaBars className="fa-times"></FaBars>
          )}
        </div>
        <ul className= {icon ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/home" className="nav-links" onClick={closeSideDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/data" className="nav-links" onClick={closeSideDrawer}>
              Data
            </Link>
          </li>
          <li>
            <Link to="/addpost" className="nav-links" onClick={closeSideDrawer}>
              Add post
            </Link>
          </li>
          <li>
            <Link
              to="/recentpost"
              className="nav-links"
              onClick={closeSideDrawer}
            >
              Recent post
            </Link>
          </li>
          <li>
            <Link
              to="/posthistory"
              className="nav-links"
              onClick={closeSideDrawer}
            >
              Post history
            </Link>
          </li>
          
        </ul>
      </nav>
    
  );
}
export default Header;
