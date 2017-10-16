import React from 'react';
// import styled from "styled-components"
import Cocktail from "./Cocktail"
import {GridList, GridTile} from "material-ui/GridList"
const CocktailList = (props) => {
    const styles = {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        },
        gridList: {
          width: 500,
          height: 450,
          overflowY: 'auto',
        },
    };
    return (
        <div style={styles.root}>
            <GridList 
                cellHeight={180}
                style={styles.gridList}
            >
             {props.submitted.map((submission) => {
                 return (
                    <GridTile
                        key={submission._id}
                        title={submission.name}
                    >
                        <img src={submission.img} />
                    </GridTile>
                 )
             })}
            </GridList>
        </div>
    );
};

export default CocktailList;

{/* <Cocktail key={submission._id} _id={submission._id} 
                        handleChange={props.handleChange}
                        updateCocktail={props.updateCocktail}
                        deleteCocktail={props.deleteCocktail}
                        title={submission.name}
                        recipe={submission.recipe}
                        img={submission.img}
                        submittedBy={submission.submittedBy}/> */}