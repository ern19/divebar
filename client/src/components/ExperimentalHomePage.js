import React, { Component } from 'react';
import NewSubmissionForm from "./NewSubmissionForm"

import Cocktail from "./Cocktail"
import axios from "axios"
import { GridList, GridTile } from 'material-ui/GridList';
  
class ExperimentalHomePage extends Component {
    state = {
        users: []
    }

    async componentWillMount() {
        const res = await axios.get("/api/users/")
        console.log(res.data)
        this.setState({ users: res.data })

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
                height: 700,
                overflowY: 'auto',
            },
            
        };
        return (
            <div style={styles.root}>
                {/* <NewSubmissionForm /> */}
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    padding={50}
                >
                    {this.state.users.map((user, index) => {
                        console.log(user)
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
                                            <img src={submission.img} />
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