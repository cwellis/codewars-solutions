function derDieDas(wort) {
    var n = wort.split(/[aeiouäöü]/i).length - 1
    if (n < 2) return "das " + wort
    if (n > 3) return "der " + wort
    return "die " + wort
  }