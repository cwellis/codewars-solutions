function oddOrEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++)
    {result+=array[i];}
    if (result%2 == 0)
    {return "even";}
    else{return "odd";}
  }