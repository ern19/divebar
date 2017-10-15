import React from 'react';
// import styled from "styled-components"
import Cocktail from "./Cocktail"

const CocktailList = (props) => {
    return (
        <div>
             {props.submitted.map((submission) => {
                 return (
                     <Cocktail key={submission._id} _id={submission._id} 
                     handleChange={props.handleChange}
                     updateCocktail={props.updateCocktail}
                     deleteCocktail={props.deleteCocktail}
                     name={submission.name}
                     recipe={submission.recipe}
                     img={submission.img}
                     submittedBy={submission.submittedBy}/>
                 )
             })}
        </div>
    );
};

export default CocktailList;