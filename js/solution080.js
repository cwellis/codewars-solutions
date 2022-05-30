function findMultiples(int, limit) {
    //your code here
    let arr = []
    for (i = int; i <= limit; i++) {
      if (i % int == 0) {
        arr.push(i)
      }
    }
    return arr
  }