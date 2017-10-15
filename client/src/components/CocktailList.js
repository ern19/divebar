import React from 'react';

const CocktailList = (props) => {
    return (
        <div>
             {props.submitted.map((submission) => {
                 return (
                     <Cocktail key={submission._id} _id={submission._id} />
                 )
             })}
        </div>
    );
};

export default CocktailList;