function findWaldo(crowd) {
    let count = new Map();
    for (let y = 0; y < crowd.length; y++) {
      for (let x = 0; x < crowd[y].length; x++) {
        count.set(crowd[y][x], (count.get(crowd[y][x]) || 0) + 1)
      }
    }
    for (let y = 0; y < crowd.length; y++) {
      for (let x = 0; x < crowd[y].length; x++) {
        if (count.get(crowd[y][x]) == 1) {
          return [y, x];
        }
      }
    }
  }