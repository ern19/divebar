import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpForm from "./SignUpForm"
import styled from "styled-components"

const Users = styled.div`
    text-align: center;
    color: white;
    font-family: "Helvetica";
    a {
        color: white
    }
    
`
const LoginContainer = styled.div`
    background-image: url("https://i.imgur.com/mBWiOzt.jpg");
    background-size: cover;
`
class Login extends Component {
  state = {
    users: []
  }

  componentWillMount () {
    this.getAllUsers()
  }

  getAllUsers = async () => {
    try {
      const res = await axios.get('/api/users')
      this.setState({users: res.data})
    } catch (err) {
        console.log(err)
    }
  }
  
  render () {
    
    return (
      <LoginContainer>

        <Users>
            <h1>Log-In</h1>
            <h3>Please Select an Existing User</h3>
       
        
            {this.state.users.map(user => {
            return (<Link to={`/user/${user._id}`}>{user.userName}<br /></Link>)
            
            })}
            <SignUpForm />
        </Users>
      </LoginContainer>
    )
  }
}

export default Login