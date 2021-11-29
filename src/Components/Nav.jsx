import React from 'react';
import { Link } from 'react-router-dom';


function Nav(props) {
    return (
        <div className="Navcontainer">    
            <div className="NavTitle">
            <Link to="/">Home</Link>
            <br />
            <Link to="/Seach">Search</Link>
            <br />
            <Link to='/Categories'>Categories</Link>  
            </div>
        </div>
    );
}

export default Nav;