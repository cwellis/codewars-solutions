function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let num = 0;
    
    for(i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i] == true)
        num++;
    }
        
    return num;
  }