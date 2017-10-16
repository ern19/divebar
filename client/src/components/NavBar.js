import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 26px 5vw;
width: 90vw;
height: 25px;
border-bottom: 1px solid rgba(0,0,0,.0975);
`

const NavBar = () => {

    return (
        <Nav>
            divebar.
            <div>
                <Link to="/">Main Page</Link>
            </div>
            <div>
                <Link to="/login">Log In</Link>
            </div>

        </Nav>
    );
};

export default NavBar;