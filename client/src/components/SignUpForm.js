import React, { Component } from 'react';
import axios from "axios"
import {Redirect} from 'react-router-dom'
class SignUpForm extends Component {
    state = {
        newUser: {
            userName: "",
            password: ""
        },
        redirectToUserPage: false,
        newUserId: ""
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }
    
    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post("/api/users", {
            "user": this.state.newUser
        })
        this.setState({redirectToUserPage: true, newUserId: res.data._id})
    }
    
   
    render() {
        if (this.state.redirectToUserPage) {
            return <Redirect to={`/user/${this.state.newUserId}`} />
        }
        return (
            <div>
                <h1>Step up to the bar...</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input
                            onChange={this.handleChange} name="userName"
                            type="text" value={this.state.newUser.userName}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            onChange={this.handleChange} name="password"
                            type="text" value={this.state.newUser.password}
                        />
                    </div>
                    <button>Sign Up</button>            
                </form>
            </div>
        );
    }
}

export default SignUpForm;