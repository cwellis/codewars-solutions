function array(arr){
    //Good luck
      let strArr = arr.split(",")
      
      strArr.pop()
      strArr.shift()
     
      if (strArr == "") {
        return null
      }

      return strArr.join(" ")
    
    }