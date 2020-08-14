let A = {
  x: function () {
    console.log("x");
    // must have this
    return this;
  },
  y: function () {
    console.log("y");
    return this;
  },
  z: function () {
    console.log("z");
    // return this;
  },
};

// We can get the desired output by “return this” in each function.
// Now “this” is the object “A”. So, A.x() will result in console logging ‘x’ followed by returning the object “A” to y().
// After that the function A.y() will print ‘y’ followed by returning the object “A” to z().
// Finally, ‘z’ is printed on console.
A.x().y().z();

function abc() {
  let a = 0;
  return function () {
    a += 1;
    return a;
  };
}

// directly invoke the function twice but is a separate closure, no backpack is returned
let a = abc()();
let b = abc()();
console.log(b); // 1

// when you create a variable to hold that returned function, a backpack that holds the value of counter is returned too,
// so when you call increment again, it found that counter has the value of 1
const increment = abc();
let c = increment();
let d = increment();
console.log(d); // 2
