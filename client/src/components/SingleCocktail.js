import React, { Component } from 'react';
import axios from "axios"


class SingleCocktail extends Component {
    state={
        user: {}
    }

    async componentWillMount () {
        const { userId } = this.props.match.params
        const { submissionId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/submitted/${submissionId}`)
        this.setState({user: res.data})
        console.log(this.state.user._id)
    }

    render() {
        return (
            <div>
                <p>Submitted By: {this.state.user.submittedBy}</p>
                <p>Cocktail Name: {this.state.user.name}</p>
                <p>Ingredients: {this.state.user.recipe}</p>
                
            </div>
        );
    }
}

export default SingleCocktail;