import React, { Component } from 'react';
import axios from "axios"
import {Link} from "react-router-dom"
import RaisedButton from "material-ui/RaisedButton"
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from "material-ui/Card"
class SingleCocktail extends Component {
    state={
        user: {}
    }

    async componentWillMount () {
        const { userId } = this.props.match.params
        const { submissionId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/submitted/${submissionId}`)
        this.setState({user: res.data})
        console.log(this.state.user.comments)
    }
    deleteCocktail = async () => {
        const { userId } = this.props.match.params
        const id = this.state.user._id
        const res = await axios.delete(`/api/users/${userId}/submitted/${id}`)
        this.setState({user: res.data})
        
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
                        <RaisedButton href={this.state.user.recipeLink}>View the recipe</RaisedButton> <br /><br/>
                        <RaisedButton onClick={this.deleteCocktail}>Dump it down the drain...</RaisedButton> /><br /><br/>
                        <Link to={`/user/${this.props.match.params.userId}/submitted/${this.props.match.params.submissionId}/update`}>edit this submission</Link>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default SingleCocktail;
// ${this.state.user.submitted._id}/update