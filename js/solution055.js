function filter_list(l) {
    // Return a new array with the strings filtered out
    let arr = []
    
    for (i = 0; i < l.length; i++) {
      if (Number.isInteger(l[i])) {
        arr.push(l[i])
      }
    }
    return arr
  }