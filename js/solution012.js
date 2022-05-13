function bulbMaze(map){
    for (let i = 0; i < map.length; i+=2){
      if (map[i] === "o"){
        return false
      }
      }
   for (let j = 1; j < map.length; j+= 2){
     if (map[j] === "x"){
       return false
     }
   }
     return true
    }