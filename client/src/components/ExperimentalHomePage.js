import React, { Component } from 'react';
import { Redirect } from "react-router-dom"

import axios from "axios"
import { GridList, GridTile } from 'material-ui/GridList';
import styled from "styled-components"

const background = styled.div`
background-color: 
`


class ExperimentalHomePage extends Component {
    state = {
        users: [],
        redirect: false,
        userId: "",
        submissionId: "",
            
    }
    async componentWillMount() {
        const res = await axios.get("/api/users/")        
        this.setState({ users: res.data })
    }
    handleChange = (event) => {
        this.setState({search: event.target.value})
    }
    render() {
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {

                width: 800,
                padding: '30px',
                overflowY: 'auto',
            },           
        };
        if (this.state.redirect) {
            return <Redirect to={`/user/${this.state.userId}/submitted/${this.state.submissionId}`} />
        }
        return (
            <div>
                
            <h2 style={{textAlign: 'center'}}>all recipes</h2>
            <div style={styles.root}>

                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    padding={20}
                    
                >
                    {this.state.users.map((user, index) => {                      
                        return (
                            user.submitted.map((submission, index) => {         
                                return (
                                    
                                        <GridTile
                                            key={submission._id}
                                            title={submission.name}
                                            
                                            subtitle={<span>{submission.recipe}</span>}
                                        >
                                        <img alt={submission.name} onClick={() => this.setState({redirect: true, submissionId: submission._id, userId: user._id})} src={submission.img} />
                                           
                                        </GridTile>   
                                )
                            }
                            )
                        )
                    })}
                </GridList>
            </div>
            </div>
        );
    }
}
export default ExperimentalHomePage;


// let filteredSubmissions = user.submitted.filter(
//                                 (submission) => {
//                                     return submission.recipe.toLowerCase().indexOf(
//                                         this.state.search.toLowerCase()) !== -1;
//                                     )
//                                 }
//                             ) 