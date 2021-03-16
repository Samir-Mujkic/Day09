//Only change code below this code
function functionDifferentValues(m, n) {
  var m;
  var n;
  if (m === n) {
    return "Equal";
  }
  return "Not equal";
}
console.log(functionDifferentValues(8, "8"));
console.log(functionDifferentValues("8", 8));
console.log(functionDifferentValues("8", 8));
console.log(functionDifferentValues("8", "8"));
console.log(functionDifferentValues(8, 8));
//Only change code above this line
module.exports = functionDifferentValues;
