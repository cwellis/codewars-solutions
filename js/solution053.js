function highAndLow(numbers){
    let arr = numbers.split(' ')
    for (i = 0; i < numbers.length; i++) {
      arr.sort((a,b) => a - b)
    }
    return `${arr[arr.length -1]} ${arr[0]}`
  }