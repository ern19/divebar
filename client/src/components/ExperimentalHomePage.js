import React, { Component } from 'react';
import NewSubmissionForm from "./NewSubmissionForm"
import { Link, Redirect } from "react-router-dom"
import Cocktail from "./Cocktail"
import axios from "axios"
import { GridList, GridTile } from 'material-ui/GridList';
  
class ExperimentalHomePage extends Component {
    state = {
        users: [],
        redirect: false,
        userId: "",
        submissionId: "",
        search: ""
    }

    async componentWillMount() {
        const res = await axios.get("/api/users/")
        console.log(res.data)
        this.setState({ users: res.data })

    }

    updateSearch(event) {
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
                // height: 700,
                overflowY: 'auto',
            },
            
        };
        if (this.state.redirect) {
            return <Redirect to={`/user/${this.state.userId}/submitted/${this.state.submissionId}`} />
          }
        return (
            <div style={styles.root}>
                {/* <NewSubmissionForm /> */}
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    padding={50}
                >
                    {this.state.users.map((user, index) => {
                       
                        return (
                            user.submitted.map((submission, index) => {
                                console.log(submission)
                                return (
                                        <GridTile
                                            key={submission._id}
                                            title={submission.name}
                                            subtitle={<span>by <b>{submission.submittedBy}</b></span>}
                                            subtitle={<span>{submission.recipe}</span>}
                                        >
                                        <img onClick={() => this.setState({redirect: true, submissionId: submission._id, userId: user._id})} src={submission.img} />
                                            {/* <p>{submission.submittedBy}</p>    */}
                                        </GridTile>
                                        
                                    
                                )

                            }
                            )
                        )


                    })}
                </GridList>
                


            </div>
        );
    }
}


export default ExperimentalHomePage;

{/* <Cocktail 
name={submission.name}
recipe={submission.recipe}
submittedBy={submission.submittedBy}
img={submission.img}
/> */}