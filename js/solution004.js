function toFreud(string) {
    
    if (string == '' || string == undefined) {
      return ''
    }
  
    let freud = []
    let arr = string.split(' ')
    
    for (i = 0; i < arr.length; i++) {
      freud.push('sex')
    }
    
    return freud.join(' ')
  }

console.log(toFreud('Hello hello yes yes yes'))