import React, { Component } from 'react';

class SingleCocktailUpdate extends Component {
    state = {

    }

    async componentWillMount () {
        const { userId } = this.props.match.params
        const { submissionId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/submitted/${submissionId}`)
        this.setState({user: res.data})
        console.log(this.state.user)
    }

    updateCocktail = async (submissionId) => {
        const { userId } = this.props.match.params
        const id = submissionId
        
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SingleCocktailUpdate;