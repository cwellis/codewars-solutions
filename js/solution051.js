function getMiddle(s)
{
  let arr = s.split('')
  for (i = 0; i < arr.length; i++) {
    if (arr.length % 2 !== 0) {
      return `${arr[Math.floor(arr.length / 2)]}`
    } else {
      return `${arr[Math.ceil(arr.length / 2) - 1]}${arr[Math.ceil(arr.length / 2)]}`
    }
  }
}