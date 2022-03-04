function sumTwoSmallestNumbers(numbers) {  
    for (i = 0; i < numbers.length; i++) {
      numbers.sort((a, c) => a - c)
    }
    return numbers[0] + numbers[1]
  }