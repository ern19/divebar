import React from 'react';
// import styled from "styled-components"
import {Card, CardMedia, CardTitle, CardHeader, CardText } from "material-ui/Card"
import RaisedButton from "material-ui/RaisedButton"

const Cocktail = (props) => {
    
    const deleteCocktail = () => {
        props.deleteCocktail(props._id)
    }

    const handleChange = (event) => {
        props.handleChange(event, props._id)
    }

    const updateCocktail = () => {
        props.updateCocktail(props._id)
    }

    return (
    
          <div>
          
            
                <input onBlur={updateCocktail} onChange={handleChange} name="submittedBy" value={props.submittedBy} />
           

            
                <img src={props.img} onBlur={updateCocktail} onChange={handleChange} name="img"  />    
            

            
                <input onBlur={updateCocktail} onChange={handleChange} name="title" value={props.name} />
                  
               
           
                <textarea onBlur={updateCocktail} onChange={handleChange} name="recipe" value={props.recipe} />
           

            <RaisedButton onClick={deleteCocktail}>Dump it down the drain...</RaisedButton>
           </div>                   
       
    );
};

export default Cocktail;