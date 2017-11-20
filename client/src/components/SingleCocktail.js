import React, { Component } from 'react';
import axios from "axios"
import {Link} from "react-router-dom"
import RaisedButton from "material-ui/RaisedButton"
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from "material-ui/Card"
import SingleCocktailUpdate from './SingleCocktailUpdate'
class SingleCocktail extends Component {
    state={
        user: {},
        showUpdateForm: false

    }

    async componentWillMount () {
        this.getCocktail()
    }

    getCocktail = async() => {
        const { userId } = this.props.match.params
        const { submissionId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/submitted/${submissionId}`)
        this.setState({user: res.data})
    }
    deleteCocktail = async () => {
        const { userId } = this.props.match.params
        const id = this.state.user._id
        const res = await axios.delete(`/api/users/${userId}/submitted/${id}`)
        this.setState({user: res.data})
    }
    showUpdateForm = () => {
        this.setState({showUpdateForm: !this.state.showUpdateForm})
    }
    render() {
        const styles = {
        card: {
            margin: "auto",
            width: 650,
                            
            overflowY: 'auto',
        },
    }
        return (
            <div style={styles.card}>
                
                <Card>
                    <CardHeader title="Submitted By:" subtitle={this.state.user.submittedBy}/>
                    <CardMedia
                    overlay={<CardTitle title={this.state.user.name} subtitle={this.state.user.recipe} />}
                    >
                    <img src={this.state.user.img} alt="" />
                    </CardMedia>
                    
                    <CardActions>
                        <RaisedButton href={this.state.user.recipeLink} label='View the recipe'/>
                        <RaisedButton onClick={this.deleteCocktail} label='Dump it down the drain...' />
                        <RaisedButton label='Edit this submission' onClick={this.showUpdateForm}/>
                    </CardActions>
                </Card>
                {this.state.showUpdateForm ? <SingleCocktailUpdate userId={this.props.match.params.userId} 
                                                                   submissionId={this.props.match.params.submissionId} 
                                                                   getCocktail={this.getCocktail}
                                                                   showUpdateForm={this.showUpdateForm}
                                                                   user={this.state.user}
                                                                   /> : null}
            </div>
        );
    }
}

export default SingleCocktail;
// ${this.state.user.submitted._id}/update