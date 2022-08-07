function wallpaper (length, width, height) {
    if (length === 0 || width === 0) return 'zero'
  
    const roomArea = 2 * (length + width) * height
    const rollArea = 0.52 * 10
  
    const rollsRequired = Math.ceil(roomArea / rollArea * 1.15)
    return numbers[rollsRequired]
  }