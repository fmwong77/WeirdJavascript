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
console.log(newArray.includes(o1)); // true

// find
console.log(
	'find',
	myArray.find((ele) => ele === 5)
);

console.log(newArray.find((arr) => arr.id === 1));
