function abbrevName(name){

    let first = name.split(' ')
    return `${first[0][0].toUpperCase()}.${first[1][0].toUpperCase()}`
  
  }
