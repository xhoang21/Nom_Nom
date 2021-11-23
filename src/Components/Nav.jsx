import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/Seach">Search</Link>
          <br />
          <Link to='/Categories'>Categories</Link>  
        </div>
    );
}

export default Nav;