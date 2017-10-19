import React from 'react';
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
                        subtitle={<span>{submission.recipe}</span>}
                    >
                        <img src={submission.img} alt={submission.name}/>
                        
                    </GridTile>
                 )
             })}
            </GridList>
        </div>
    );
};

export default CocktailList;

