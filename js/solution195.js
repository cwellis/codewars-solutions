const vowels = ["a", "e", "i", "o", "u"];
const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');