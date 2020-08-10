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
