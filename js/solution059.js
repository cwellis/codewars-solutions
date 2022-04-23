function findMultiples(integer, limit) {
    //your code here
    let arr = []
    for (i = integer; i <= limit; i++) {
      if (i % integer == 0) {
        arr.push(i)
      }
    }
    return arr
  }