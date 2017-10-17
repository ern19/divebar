import React from 'react';
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
`
const HeaderAnchor = styled.div`
a{
    text-decoration: none;
    color: black;
}

`
const SearchContainer = styled.div`
background: #fafafa;
border: 1px solid #dbdbdb;
width: 25%;
padding: 7px;
border-radius: 3px;
color: #999;
svg{
  margin-bottom: 5px;
}
input{
  border: none;
  font-weight: 300;
  background: transparent;
  text-align: center;
}`

const NavBar = () => {

    return (
        <Nav>
           
            <HeaderAnchor>
                <Link to="/">divebar.</Link>
            </HeaderAnchor>
            <SearchContainer>
            <input type="text" placeholder="Search"/>
            </SearchContainer>
            <div>
                <Link to="/login">Log In</Link>
            </div>

        </Nav>
    );
};

export default NavBar;