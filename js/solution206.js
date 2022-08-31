// function transformingChess(piece, row, col) {
//     if (piece === 'r' && !((col===1 && row === 1) || (col===3 && row === 1) || (col===3 && row === 3) || (col===1 && row === 3))) {
//         return 'win'
//     }
//     if (piece === 'b' && ((row===col) || ((row+col)===4))){
//         return 'win'
//     }
//     else if (piece === 'b' && ((col===0 && row === 2) || (col===2 && row === 0) || (col===4 && row === 2) || (col===2 && row === 4))){
//     return 'lose';
//              }
//     if(piece === 'q' && !((col===1 && row === 2) || (col===2 && row === 1) || (col===2 && row === 3) || (col===3 && row === 2))){
//       return 'win'
//     }
//     else {
//       return 'draw'
//     }
//     }