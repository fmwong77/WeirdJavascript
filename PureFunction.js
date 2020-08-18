// not pure function, by changing the sequence, the result is different
const num = {
  val: 1,
};
const add5 = () => (num.val += 5);
const multiply5 = () => (num.val *= 5);

// console.log(add5()); // 6
// console.log(multiply5()); // 6*5=30, end result = 30

console.log(multiply5()); // 1*5=5,
console.log(add5()); // 5 + 5 = 10, end result = 10

// to implement pure function
// const add5_pure = () => Object.assign({}, num, { val: (num.val += 5) });
// const multiply5_pure = () => Object.assign({}, num, { val: (num.val *= 5) });
// console.log(add5_pure());

// result is the same no matter the sequence
const multiply5_pure = () => Object.assign({}, num, { val: (num.val *= 5) });
const add5_pure = () => Object.assign({}, num, { val: (num.val += 5) });
console.log(add5_pure());
