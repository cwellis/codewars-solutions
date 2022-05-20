function consecutive(arr, a, b) {
    return arr.indexOf(a) + 1 === arr.indexOf(b) || arr.indexOf(a) - 1 === arr.indexOf(b);
  }