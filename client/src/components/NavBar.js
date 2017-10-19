import React, {Component} from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.div`
background-color: rgba(240, 240, 240, 0.9);
display: flex;
justify-content: space-between;
align-items: center;
padding: 26px 5vw;
width: 90vw;
height: 25px;
border-bottom: 1px solid rgba(0,0,0,.0975);
margin-bottom: 20px;
`
const HeaderAnchor = styled.div`
a{
    text-decoration: none;
    color: black;
    font-size: 36px;
}

`

class NavBar extends Component {

  render() {
    
    return (
        <Nav>
           
            <HeaderAnchor>
                <Link to="/">divebar.</Link>
            </HeaderAnchor>
            
            <div>
                <Link to="/login">Log In</Link>
            </div>

        </Nav>
    );
};
}

export default NavBar;