const myArray = [1, 3, 5, 7, 9];

// filter returns new array
console.log(myArray.filter((ele) => ele > 4));
console.log(myArray);

// includes([value],[position])
console.log(myArray.includes(3, 0));

const o1 = { id: 1 };
const o2 = { id: 2 };
const o3 = { id: 3 };

const newArray = [o1, o2, o3];
console.log("include:", newArray.includes(o1)); // true

// find: return the value if found else return undefined
console.log(
  "find:",
  myArray.find((ele) => ele === 10)
);

// find in object array: return the object if found else return undefined
console.log(newArray.find((arr) => arr.id === 4));

// reduce
console.log(
  "reduce array:",
  myArray.reduce((accumulator, curElement) => accumulator + curElement, 10)
);

console.log(
  "reduce object:",
  newArray.reduce((sum, item) => sum + item.id, 0)
);

// reduce object must have initial value, remove parenthesis
let newObjArray = [
  { name: "ball", points: 2 },
  { name: "coin", points: 3 },
  { name: "candy", points: 4 },
];
let sum1 = newObjArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue.points,
  0
);

console.log("reduce object:", sum1);

// use reduce to flatten the array
let arr = [
  [1, 2, 3],
  [4, 5],
];
let result = arr.reduce(
  (accumulator, cur) => (accumulator = accumulator.concat(cur)),
  []
);

console.log("flatten 2D array", result);

// splice(start, how many), returned the removed elements in array
var myArr = ["Java", "PHP", "HTML", "jQuery", "Eclipse", "NetBeans"];
// console.log(myArr.splice(2, 3));

// slice(start, end), does not changed the original array, return the new array minus the removed element
let slicedArr = myArr.slice(3, 4);
console.log(myArr, slicedArr);
