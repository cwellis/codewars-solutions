function largest(n,xs){
    // Find the n highest elements in a list
    var len = xs.length;    
    // Basic bubble sort in O(n^2)
    for(var i = len ; i >= 0 ; --i){
        for(var j = 0; j < i ; j++){
            if(xs[j] > xs[j + 1]){
                // Swaping position n && n+1
                var swap = xs[j];
                xs[j] = xs[j+1];
                xs[j + 1] = swap;            
            }
        }
    }
    
    
    return xs.slice(len - n)
      
  }