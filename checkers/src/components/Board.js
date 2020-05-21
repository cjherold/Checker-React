import React from 'react';
import Square from './Square';

// takes key values for squares and renders a Square
function renderSquares(square) {
    return(
        <Square
            key={square.key}
            className={square.className}
            size={square.size}
            row={square.row}
            col={square.col}
        />
    )
}

// builds list of key value pairs used to build a square
function allSquares(nsquares) {
        
    var allSquares = []
    var className = "";
    var flipped = true;

    // row
    for (var i=0; i<nsquares; i++) {
        
        // column
        for (var j=0; j<nsquares;j++) {
            let tempKey = (i + '' + j).toString();
            if (j % 2 === 0) {
                className = (flipped) ? "black-square" : "white-square";
            } else { 
                className = (flipped) ? "white-square" : "black-square";
            }
        
            allSquares.push({ key: tempKey, className: className, size: nsquares, row: i, col: j });   
        }
        // next row different black/white
        flipped = !flipped; 
    }
    return allSquares;
}

// this fills the checker board with squares 
const Board = (props) => {
    
    // build a list that is used to creae Square objects (sizes based on input box number)
    const totalSquares = allSquares(props.squares);

    // add all Square's to Board
    return (
        <div className="Board">
            {totalSquares.map(renderSquares)}

        </div>
        
    );
        
};

export default Board;
