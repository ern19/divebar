import React, { Component } from 'react';
import axios from 'axios'
import TextField from "material-ui/TextField"
class SingleCocktailUpdate extends Component {
    state = {
        user: {}   
    }

    async componentWillMount () {
        console.log(this.props)
        this.getCocktail()

    }
    
    getCocktail = async() => {
        const userId = this.props.userId
        const submissionId = this.props.submissionId
        const res = await axios.get(`/api/users/${userId}/submitted/${submissionId}`)
        this.setState({user: res.data})
    }
    handleChange = (event, submissionId) => {
        const attribute = event.target.name
        const clonedUser = {...this.state.user}
        console.log(event.target.value)
        clonedUser[attribute] = event.target.value
        // submission[attribute] = event.target.value
        this.setState({user: clonedUser})
    }

    updateCocktail = async (event) => {
        event.preventDefault()
        const  userId  =  this.props.userId
        const id = this.props.submissionId
        const clonedUser = {...this.state.user}
        const res = await axios.patch(`/api/users/${userId}/submitted/${id}`, {
            submitted: clonedUser    
        })
        this.setState({user: res.data})
        this.props.getCocktail()
        this.props.showUpdateForm()     
    }
   
    render() {
        return (
            <div>
                <h4>Edit this submission</h4>
                <form onSubmit={this.updateCocktail}>
                    <div>
                        <label htmlFor="name">Cocktail Name:   </label>
                        <TextField
                            onChange={this.handleChange} name="name"
                            type="text" value={this.state.user.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="img">Image Link:   </label>
                        <TextField 
                            onChange={this.handleChange} name="img"
                            type="text" value={this.state.user.img}
                        />
                    </div>
                    <div>
                        <label htmlFor="recipe">Recipe:   </label>
                        <TextField
                            onChange={this.handleChange} name="recipe"
                            type="text" value={this.state.user.recipe}
                        />
                    </div>
                    <div>
                        <label htmlFor="submittedBy">Submitted By:   </label>
                        <TextField
                            onChange={this.handleChange} name="submittedBy"
                            type="text" value={this.state.user.submittedBy}
                        />
                    </div>
                    <div>
                        <label htmlFor="recipeLink">Recipe Link:   </label>
                        <TextField
                            onChange={this.handleChange} name="recipeLink"
                            type="text" value={this.state.user.recipeLink}
                        />
                    </div>
                    <button>Submit</button>            
                </form>
            </div>
        );
    }
}

export default SingleCocktailUpdate;