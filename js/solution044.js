function eachCons(array, n) {
    let res = [];

    for (let i = 0; i < array.length; i++) {
        res.push(array.slice(i,i + n))
    }

    return res.filter(e => e.length === n)
}

console.log(eachCons([1,2,3,4,5,6,7,8,9,0], 3))

function findDifference(a, b) {
  let aX = 1
  let bX = 1
  
  for (i = 0; i < a.length; i++) {
    aX *= a[i]
  }
  
  for (i = 0; i < b.length; i++) {
    bX *= b[i]
  }
  
  if (aX > bX) {
    return aX - bX
  } else if (bX > aX) {
    return bX - aX
  }
}

console.log(findDifference([1,2,3],[1,3,4]))
// fix