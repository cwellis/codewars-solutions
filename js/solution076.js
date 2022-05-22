function sumOfDifferences(arr) {
    arr.sort((a, b) => a - b);
    let b = 0;
    for(let a = arr.length - 1; a > 0; a--) {
      b += arr[a] - arr[a - 1];
    }
    return b;
  }