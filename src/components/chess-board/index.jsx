import React from 'react'


function generateChessBoardSquares(rows) {
    let squaresRows = [];
    

    for (let i = 0; i < rows; i++) {
        let squaresColumn=[];
        for (let j = 0; j < rows; j++) {
            squaresColumn.push(
                
                    <div style={{ display: 'flex', border: '1px solid black', backgroundColor: j % 2 === i % 2   ? 'white' : 'black', height: '50px', width: '50px', alignItems: 'center', justifyContent: 'center' ,gap:10}}>

                    </div>
              

            )
        }
       squaresRows.push(<div style={{ display: 'flex' }}>{squaresColumn}</div>)
       
    }

 return squaresRows;

}

const ChessBoard = () => {
    return (
        <div>
            {generateChessBoardSquares(8)}
        </div>

    )
}

export default ChessBoard;