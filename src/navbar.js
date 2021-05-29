import React from './navbar';
// import { Link } from "react-router-dom";
import { Menu } from 'react-burger-menu';
import Navbar from './navbar.css';


export default props => {
    return (
        <div className="nav">
          <Menu>

          <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        About
      </a>
      <a className="menu-item" href="/pizzas">
        Pricing
      </a>
      <a className="menu-item" href="/desserts">
        Contact
      </a>

 {/* <ul>
 <Link to="/"><li>Home</li>
        </Link>
        <Link to="/About"><li>About</li>
        </Link>
        <Link to="/pricing"><li>Pricing</li>
        </Link>
       <Link to="/Contact">
       <li>Contact</li>
       </Link>
        <li className="webo">WEBO</li>
      </ul> */}
      </Menu>
      
        </div>
    );
}

export default Navbar;