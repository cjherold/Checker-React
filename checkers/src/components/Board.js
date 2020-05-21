import React from 'react';
import Square from './Square';


const Board = (props) => {
    
    // change square size based on input number
    const totalSquares = allSquares(props.squares);

    // takes array of key values for squares and renders a Square
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

    // builds an array of key value pairs that build a square
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

    // add all Square's to Board
    return (
        <div className="Board">
            {totalSquares.map(renderSquares)}

        </div>
        
    );
        
};

export default Board;
