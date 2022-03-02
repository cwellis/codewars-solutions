function usdcny(usd) {
    let conv = (usd * 6.75).toFixed(2)
    return `${conv} Chinese Yuan`
  }

console.log(usdcny(1792))