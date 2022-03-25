function pillars(num_pill, dist, width) {
    let widthPill = num_pill * width
    widthPill -= width * 2
    let distPill = (dist * (num_pill - 1)) * 100
    
    if (num_pill === 1) {
      return 0
    }
    
    return widthPill + distPill
  }