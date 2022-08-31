// function findMaxProduct(arr){
//     const product = [];
//     let sum = 1;
//     for (let k = 0; k < arr.length; k++) {
//       for (let i = k; i < arr.length; i += k + 1) {
//         sum *= arr[i];
//       }
//       product.push(sum);
//       sum = 1;
//     }
//     return Math.max(...product);
  
//   }