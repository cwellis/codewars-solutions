function descendingOrder(n){
    let arr = n.toString().split('')
    for (i = 0; i < arr.length; i++) {
      arr.sort((a,b) => a - b)
    }
    let revArr = arr.reverse().join('')
    return Number(revArr)
  }