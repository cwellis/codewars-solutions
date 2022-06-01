function filter_list(str) {
    // Return a new array with the strings filtered out
    let arr = []
    
    for (i = 0; i < str.length; i++) {
      if (Number.isInteger(str[i])) {
        arr.push(str[i])
      }
    }
    return arr
  }