function isPalindrome(x) {
    // your code here
    let reverse = ""
    
    for (i = x.length - 1; i >= 0; i--) {
      reverse += x[i]
    }
    
    if (x.toLowerCase() === reverse.toLowerCase()) {
      return true
    } else {
      return false
    }
  }