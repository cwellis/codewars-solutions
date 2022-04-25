function digitize(n) {
    //code here
    let newArr = []
    let arr = n.toString().split('').reverse()
    
    for (i = 0; i < arr.length; i++) {
      newArr.push(Number(arr[i]))
    }
    
    return newArr
  }