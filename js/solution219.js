function isItANum(s) {
    let r = s.split('').filter(c=>'0123456789'.includes(c)).join('')
    return r.length==11 && r[0]=='0' && r || "Not a phone number"
  }