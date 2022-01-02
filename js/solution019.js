function squareDigits(num){
    let arr = []
    let newArr = num.toString().split('')
    for (i = 0; i < newArr.length; i++) {
      arr.push(newArr[i] ** 2)
    }
    return Number(arr.join(''));
  }