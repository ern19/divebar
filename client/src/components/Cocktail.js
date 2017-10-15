import React from 'react';
// import styled from "styled-components"

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
           <input onBlur={updateCocktail} onChange={handleChange} name="title" value={props.name} />
           <input onBlur={updateCocktail} onChange={handleChange} name="img" value={props.img} />
           <input onBlur={updateCocktail} onChange={handleChange} name="submittedBy" value={props.submittedBy} />

           <textarea onBlur={updateCocktail} onChange={handleChange} name="recipe" value={props.recipe} />
           <button onClick={deleteCocktail}>Dump it down the drain...</button>
        </div>
    );
};

export default Cocktail;