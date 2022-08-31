// function guessTheCard(audience) {
//     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
//         cards = [[], [], []],
//         count = 0
//     const deal = () =>
//         array.forEach((el, index) => cards[index % 3].push(el))    
//     const stack = () => {
//         let row = audience.getInput(cards)
//         row == 0 ? array = cards[1].concat(cards[0]).concat(cards[2])
//             : row == 1 ? array = cards[0].concat(cards[1]).concat(cards[2])
//                 : array = cards[0].concat(cards[2]).concat(cards[1])
//                 cards = [[],[],[]]
//     }
//     while(count<3){
//         deal()
//         stack()
//         count++       
//     }
//     return array[10]
// }