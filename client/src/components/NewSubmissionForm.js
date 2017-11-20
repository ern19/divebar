import React, { Component } from 'react';
import axios from "axios"
import {Redirect} from 'react-router-dom'
import TextField from "material-ui/TextField"
class NewSubmissionForm extends Component {

    state = {
        newSubmission: {
            name: "",
            recipe: "",
            img: "",
            submittedBy: "",
        },
        redirectToUserPage: false,
        userId: this.props.userId
        
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateSubmission = {...this.state.newSubmission}
        updateSubmission[attribute] = event.target.value
        this.setState({newSubmission: updateSubmission})
    }
    
    handleSubmit = async (event) => {
        
        event.preventDefault()
        const  userId  = this.props.userId
        const res = await axios.post(`/api/users/${userId}/submitted`, {
            "submitted": this.state.newSubmission
        })
        this.setState({redirectToUserPage: true, userId: res.data._id})
        this.props.getUsersCocktails()
    }
    
   
    render() {
        if (this.state.redirectToUserPage) {
            return <Redirect to={`/user/${this.state.userId}`} />
        }
        return (
            <div>
                <h4>Share your favorite</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Cocktail Name:  </label>
                        <TextField
                            onChange={this.handleChange} name="name"
                            type="text" value={this.state.newSubmission.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="img">Image Link:  </label>
                        <TextField 
                            onChange={this.handleChange} name="img"
                            type="text" value={this.state.newSubmission.img}
                        />
                    </div>
                    <div>
                        <label htmlFor="recipe">Recipe:  </label>
                        <TextField
                            onChange={this.handleChange} name="recipe"
                            type="text" value={this.state.newSubmission.recipe}
                        />
                    </div>
                    <div>
                        <label htmlFor="submittedBy">Submitted By:  </label>
                        <TextField
                            onChange={this.handleChange} name="submittedBy"
                            type="text" value={this.state.newSubmission.submittedBy}
                        />
                    </div>
                    <div>
                        <label htmlFor="recipeLink">Recipe Link:  </label>
                        <TextField
                            onChange={this.handleChange} name="recipeLink"
                            type="text" value={this.state.newSubmission.recipeLink}
                        />
                    </div>
                    <button>Submit</button>            
                </form>
            </div>
        );
    }
}

export default NewSubmissionForm;