let countSheep = function (num){
    //your code here
    let sheepCount = ''
    if (num > 0) {
      for (i = 1; i <= num; i++) {
        sheepCount += `${i} sheep...`
      }
    }
    return sheepCount
  }