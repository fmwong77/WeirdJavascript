// imperative
const sumArray_imperative = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

// declarative
const sumArray_declarative = (array) =>
  array.reduce((accumulator, e) => accumulator + e);

console.log(sumArray_declarative([1, 2, 3]));
console.log(sumArray_imperative([1, 2, 3]));
