function squares(x, n) {
    var ret = [];
    for(var i=0; i<n; i++){
      ret.push(x);
      x*= x;
    }
    return ret;
  }