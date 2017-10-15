import React from 'react';
// import styled from "styled-components"
import Cocktail from ("./cocktail")

const CocktailList = (props) => {
    return (
        <div>
             {props.submitted.map((submission) => {
                 return (
                     <Cocktail key={submission._id} _id={submission._id} 
                     handleChange={props.handleChange}
                     updateCocktail={props.updateCocktail}
                     deleteCocktail={props.deleteCocktail}
                     name={submitted.name}
                     recipe={submitted.recipe}
                     img={submitted.img}
                     submittedBy={submitted.submittedBy}/>
                 )
             })}
        </div>
    );
};

export default CocktailList;