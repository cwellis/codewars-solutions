function doubleChar(str) {
    let newStr = ""
    
    for (i = 0; i < str.length; i++) {
      newStr += str[i] + str[i]
    }
    return newStr
  }