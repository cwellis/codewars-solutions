function makeNegative(num) {
    // Code?
    if (num < 0) {
      return num
    } else if (num > 0) {
      return (num - (2 * num))
    } else {
      return 0
    }
  }