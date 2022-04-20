var min = function(list){
  
    for (i = 0; i < list.length; i++) {
      list.sort((a,b) => a - b)
    }
    
    return list[0];
}

var max = function(list){
  
    for (i = 0; i < list.length; i++) {
        list.sort((a,b) => a - b)
    }
    
    return list[list.length - 1];
}