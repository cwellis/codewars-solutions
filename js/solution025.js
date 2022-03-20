function aspectRatio(x,y){
    let arr = []
    x = Math.ceil(y * (16/9))
    
    arr.push(x)
    arr.push(y)
    
    return arr
  }