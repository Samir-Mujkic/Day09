//Only change code below this line
function myEquealFunction(num) {
  if (num === 23) {
    return "Equal";
  }
  return "Not equal";
}
console.log(myEquealFunction(5));
console.log(myEquealFunction(23));
console.log(myEquealFunction("23"));
console.log(myEquealFunction('23'));
console.log(myEquealFunction("text"));

//Only change code above this line

module.exports = myEquealFunction;
