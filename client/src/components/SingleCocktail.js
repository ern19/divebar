import React, { Component } from 'react';
import axios from "axios"
import RaisedButton from "material-ui/RaisedButton"

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
    deleteCocktail = async (submissionId) => {
        const { userId } = this.props.match.params
        const id = submissionId
        const res = await axios.delete(`/api/users/${userId}/submitted/${id}`)
        this.setState({user: res.data})
        console.log("delete clicked")
    }
    render() {
        return (
            <div>
                <p>Submitted By: {this.state.user.submittedBy}</p>
                <p>Cocktail Name: {this.state.user.name}</p>
                <p>Ingredients: {this.state.user.recipe}</p>
                <RaisedButton onClick={this.deleteCocktail}>Dump it down the drain...</RaisedButton>
            </div>
        );
    }
}

export default SingleCocktail;