function array(array){
    //Good luck
      let strArr = array.split(",")
      
      strArr.pop()
      strArr.shift()
     
      if (strArr == "") {
        return null
      }

      return strArr.join(" ")
    