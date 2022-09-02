const eqSumPowdig = (hMax, exp) => [...Array(hMax - 1)]
  .map((_, idx) => idx + 2)
  .filter(num => [...`${num}`].reduce((sum, val) => sum + Math.pow(val,exp), 0) === num);