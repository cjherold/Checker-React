import React, { useState } from 'react';



const Square = (props) => {
    // square edge length
    const edge = ((1/props.size * 100) + '%');
    
    // set width and height based on number of squares
    const [squareSize] = useState(edge);

    return(
        <div
            className={props.className} 
           
            row={props.row}
            col={props.col}
            style={{
                width: squareSize, 
                height: squareSize
            }}
        ></div>
        
    )}

export default Square;

