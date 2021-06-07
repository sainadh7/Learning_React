//Array Destructuring: Individual elements are assigned out of array

let nos = [10,20,function(){ console.log(100)}]
let [a,b,fx] = nos

console.log(a)
console.log(b)
fx()