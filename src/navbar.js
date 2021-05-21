import React from './navbar';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="nav">
 <ul>
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
      </ul>
      
        </div>
    );
}

export default Navbar;