let enocding = {
    'a': 'g', 'A': 'G', 
    'D': 'E', 'd': 'e', 
    'R': 'Y', 'r': 'y', 
    'P': 'O', 'p': 'o', 
    'L': 'U', 'l': 'u', 
    'K': 'I', 'k': 'i',
    'G': 'A', 'g': 'a', 
    'E': 'D', 'e': 'd', 
    'Y': 'R', 'y': 'r', 
    'O': 'P', 'o': 'p', 
    'U': 'L', 'u': 'l', 
    'I': 'K', 'i': 'k'}
  
  function encode(str) {
    return str.split("").map(a => enocding[a] || a).join("");
  }
  
  function decode(str) {
      return encode(str); 
  }