const xMarksTheSpot = (input) => {
    let coords = []
  
    for (let i = 0; i < input.length; i++) {
      if (input[i].includes("x")) {
        coords.push([i, input[i].indexOf("x")])
      }
    }
    if (coords.length === 1) {
      return coords[0]
    } else {
      return []
    }
  }