function nbYear(p0, percent, aug, p) {
    let year = 0
    
    for (i = 0; p0 < p; i++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug)
    }
  return i
}