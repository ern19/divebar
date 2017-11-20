import React, { Component } from 'react';
import axios from "axios"
// import styled from "styled-components"
import CocktailList from "./CocktailList"
import NewSubmissionForm from "./NewSubmissionForm"
import styled from "styled-components"
import RaisedButton from 'material-ui/RaisedButton'

const CenterContent = styled.div`
    text-align: center;
`
class CocktailPage extends Component {
    state={
        user: {
            userName: "",
            password: "",
            submitted: []
        },
        showForm: false
    }

    async componentWillMount () {
        this.getUsersCocktails()
    }

    getUsersCocktails = async() => {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({user: res.data})
    }
    createNewCocktail = async () => {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/submitted`, {})
        console.log(res.data)
        // this.setState({user: res.data})
    }
    
    showForm = () => {
        this.setState({showForm: !this.state.showForm})
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
            <CenterContent>
            
                <div>
                    <h1>{this.state.user.userName}'s Submissions</h1>
                </div>
                        
                <CocktailList submitted={this.state.user.submitted} 
                />
                <RaisedButton label='Add New Recipe' onClick={this.showForm}/>
                {this.state.showForm ? <NewSubmissionForm userId={this.props.match.params.userId}
                                        getUsersCocktails={this.getUsersCocktails}/> : null}
            </CenterContent>
        );
    }
}

export default CocktailPage;  

