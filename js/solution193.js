function nextElementGenerator(array) {
    let i = 0;
    while (true) {
      if (i >= array.length) {
        i = 0;
      }
      
      yield array[i++];
    }
  }