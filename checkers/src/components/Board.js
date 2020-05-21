import React from 'react';
import Square from './Square';

function createSquare(square) {
    if (square.isBlack === 3) {
        return (<br/>);
    }
    else if (square.isBlack === 1) {
        return <Square 
                    key={square.count} 
                    className="black-square" 
                    size={square.size}
                    />;
    } else {
        return <Square 
                    key={square.count} 
                    className="white-square" 
                    size={square.size}
                    />;
    }
}

const Board = (props) => {
  
   
    function createBoard(props) {
        const squareCount = props.squares;
        var boardArray = [];
        var squareID = 0;

        //rowbuilder
        function createRow(squareCount, flipped) {
            
            var isOddRow = flipped;
            var rowArray = [];
            for (let i=0; i<squareCount; i++) {
                if (i % 2 === isOddRow) {
                    boardArray.push({
                        count: squareID,
                        isBlack: 1,
                        size: (squareCount)
                    });
                }
                else {
                    boardArray.push({
                        count: squareID,
                        isBlack: 0,
                        size: (squareCount)
                    });
                }
                squareID ++;
            }
        }

        //columns
        for (let j=0; j<squareCount; j++) {

            createRow(squareCount, (j % 2));
            boardArray.push({
                count: squareID,
                isBlack: 3,
                size: squareCount
            });
            squareID++;
        }
        return boardArray;

    }
    
    var board = createBoard(props);


    return (
        <div className="Board">
            {board.map(createSquare)}

        </div>
        
    )
        
}

export default Board;
