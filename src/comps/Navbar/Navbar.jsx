import React from 'react';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css";

const Navbar = ()=>{

  return(
<>
<div id='navbar'>
<nav>
    <div className="nav-wrapper " style={{backgroundColor:"black"}}>
      <NavLink to="/"  className="brand-logo right navbar-links">H<span style={{color:"orange"}}>L</span></NavLink>
      
      <ul id="" className="navbarLinks">
        <li><NavLink exact activeClassName="activeRoute" className="navbar-links" to="/">Home</NavLink></li>
        <li><NavLink exact activeClassName="activeRoute" className="navbar-links" to="/game-updates">Game Updates</NavLink></li>
        <li><NavLink exact activeClassName="activeRoute" className="navbar-links"  to="/about">About</NavLink></li>
      </ul>
    </div>
  </nav>
        

</div>
</>
  )
}

export default Navbar;