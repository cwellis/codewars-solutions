function pipeFix(numbers){
    let fix = []
    
    for (i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
      fix.push(i)
    }
    
    return fix
  }