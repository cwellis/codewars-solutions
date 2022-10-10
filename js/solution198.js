function contact(hallway) {
    const gaps = hallway.match(/>-*</g)
    return !gaps ? -1 : Math.min(...gaps.map(s=>s.length)) >> 1
  }