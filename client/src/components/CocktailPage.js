import React, { Component } from 'react';
import axios from "axios"
// import styled from "styled-components"
import CocktailList from "./CocktailList"

class CocktailPage extends Component {
    state={
        user: {
            userName: "",
            password: "",
            submitted: []
        }
    }

    async componentWillMount () {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({user: res.data})
    }

    createNewCocktail = async () => {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/submitted`)
        console.log(res.data)
        this.setState({user: res.data})
    }

    deleteCocktail = async (submissionId) => {
        const { userId } = this.props.match.params
        const id = submissionId
        const res = await axios.delete(`/api/users/${userId}/submitted/${id}`)
        this.setState({user: res.data})
    }

    handleChange = (event, submissionId) => {
        const attribute = event.target.name
        const clonedUser = {...this.state.user}
        const submission = clonedUser.submitted.find(i => i._id === submissionId)
        console.log(submission)
        submission[attribute] = event.target.value
        this.setState({user: clonedUser})
    }

    updateCocktail = async (submissionId) => {
        const { userId } = this.props.match.params
        const id = submissionId
        const clonedUser = {...this.state.user}
        const submission = clonedUser.submitted.find(i => i._id === submissionId)
        const res = await axios.patch(`/api/users/${userId}/submitted/${id}`, {
            submission: submission
        })
        this.setState({user: res.data})
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.user.userName}'s Submissions</h1>
                    <button onClick={this.createNewCocktail}>New submission</button>
                </div>
                <CocktailList submitted={this.state.user.submitted}
                    handleChange={this.handleChange}
                    deleteCocktail={this.deleteCocktail}
                    updateCocktail={this.updateCocktail}
                />
            </div>
        );
    }
}

export default CocktailPage;