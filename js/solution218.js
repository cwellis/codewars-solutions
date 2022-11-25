function incrementer(num) { 
    return num.map((a,i) => (a+i+1)%10);
  }