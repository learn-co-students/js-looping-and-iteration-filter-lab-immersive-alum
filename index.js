// Code your solution in this file
function findMatching(arr, term){
  return arr.filter(function(word){return word.toLowerCase() === term.toLowerCase()});
};

function fuzzyMatch(arr, term){
  return arr.filter(function(word){return word.startsWith(term)});
};

function matchName(arr, name){
  return arr.filter(function(obj){return obj.name === name});
};
