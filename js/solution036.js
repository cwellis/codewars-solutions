const flip=(d, a)=>{
    //TODO
    for (i = 0; i < a.length; i++) {
      if (d == "R") {
        return a.sort((a, b) => a - b)
      } else if (d =="L") {
        return a.sort((a, b) => b - a)
      }
    }
  }