function sumStr(a,b) {
  
    if (a === "") {
      a = 0
    }
    
    if (b === "") {
      b = 0
    }
    
    let numA = Number(a)
    let numB = Number(b)
    
    let sum = numA + numB
    
    return sum.toString()
    
  }