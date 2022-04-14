function vowelIndices(word){
    //your code here
    let arr = []
    let wordArr1 = word.toLowerCase()
    let wordArr = wordArr1.split('')
    
    for (i = 0; i < wordArr.length; i++) {
      if (wordArr[i] == 'a' || wordArr[i] == 'e' || wordArr[i] == 'i' || wordArr[i] == 'o' || wordArr[i] == 'u') {
        arr.push(wordArr.indexOf(wordArr[i]) + 1)
      } else {

      }
    }
    return arr
  }