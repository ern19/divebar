import React, { Component } from 'react';
import axios from "axios"
import RaisedButton from "material-ui/RaisedButton"
import {Card, CardActions, CardHeader, CardMedia, CardText, CardTitle} from "material-ui/Card"
class SingleCocktail extends Component {
    state={
        user: {}
    }

    async componentWillMount () {
        const { userId } = this.props.match.params
        const { submissionId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/submitted/${submissionId}`)
        this.setState({user: res.data})
        console.log(this.state.user)
    }
    deleteCocktail = async () => {
        const { userId } = this.props.match.params
        const id = this.state.user._id
        const res = await axios.delete(`/api/users/${userId}/submitted/${id}`)
        this.setState({user: res.data})
        console.log("delete clicked")
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
                    
                    <CardMedia
                    overlay={<CardTitle title={this.state.user.name} subtitle={this.state.user.recipe} />}
                    >
                    <img src={this.state.user.img} alt="" />
                    </CardMedia>
                    <CardActions>
                        <RaisedButton onClick={this.deleteCocktail}>Dump it down the drain...</RaisedButton> />
                        <RaisedButton link={this.state.user.recipeLink}>View the recipe</RaisedButton>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default SingleCocktail;