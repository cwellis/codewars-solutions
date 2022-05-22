function bingo(a) {
    let n = [2,9,14,7,15]
    for(let i =0; i< n.length;i++){
    if(!a.includes(n[i])){ return 'LOSE' }
    }
    return 'WIN'
  }