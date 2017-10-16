import React, { Component } from 'react';
import NewSubmissionForm from "./NewSubmissionForm"

import Cocktail from "./Cocktail"
import axios from "axios"
class HomePage extends Component {
    state={
            users: []
    }
    
    async componentWillMount () {
        const res = await axios.get("/api/users/")
        console.log(res.data)
        this.setState({users: res.data})
        
    }
    
    render() {
        return (
            <div>
                <NewSubmissionForm />
                {this.state.users.map((user, index) => {
                    console.log(user)
                    return(
                    user.submitted.map((submission, index) => {
                        console.log(submission)
                        return (
                            <Cocktail 
                                name={submission.name}
                                recipe={submission.recipe}
                                submittedBy={submission.submittedBy}
                                img={submission.img}
                            />
                        )
                    
                    }
                    )
                    )
                })}
            
            </div>
        );
    }
}


export default HomePage;