let a = [1, 2, 3, 4];
// let b = a; // any changes to b will affects a

// spread operator and Object.assign use to shallow copy an object
// so that when any changes happen to the new object will not affects the original one
let b = [...a]; // or let b = Object.assign([], a);
b.push(5);
console.log(Math.max(...a)); // 4
console.log(Math.min(...a)); // 1
