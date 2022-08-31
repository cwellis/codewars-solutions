// function olympicRing(a){
//     const rings = ['A', 'D', 'O', 'P', 'Q', 'R', 'a', 'b', 'd', 'e', 'g', 'o', 'p', 'q'];
//     const twoRings = ['B'];
//     let score = 0;
    
//     a.split('').map(x => rings.includes(x) 
//       ? score++ 
//       : twoRings.includes(x) 
//         ? score = score + 2 
//         : x
//     );
  
//     score = Math.floor(score/2);
    
//     return score <= 1 
//       ? 'Not even a medal!'
//       : score === 2
//         ? 'Bronze!'
//         : score === 3
//           ? 'Silver!'
//           : 'Gold!'
//     ;  
//   }