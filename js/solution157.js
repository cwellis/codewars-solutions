// function londonCityHacker(journey) {
//     let sum = 0;
    
//     for (let i = 0; i < journey.length; i++) {
//       if (typeof journey[i] === "string") sum += 2.40;
//       else {
//         sum += 1.50;
//         if (typeof journey[i + 1] === "number") i++;
//       }  
//     }
    
//     return `£${sum.toFixed(2)}`;
//   }