function digPow(n, p){
    // ...
    var num1=n.toString();
    var num2=p.toString();
    var sum=0;
    
    for(var i=0;i<num1.length;i++){
      sum=sum+Math.pow(parseInt(num1.charAt(i)),p);
      p++;
      if(sum%n==0){return sum/n;}
    }
    return -1;
    
    
  }