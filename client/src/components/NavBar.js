import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <div>
                <Link to="/">Main Page</Link>
            </div>
            <div>
                <Link to="/login">Log In</Link>
            </div>
        </div>
    );
};

export default NavBar;