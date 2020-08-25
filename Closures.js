function greet(whattosay) {
  return function (name) {
    console.log(whattosay + " " + name);
  };
}

var sayHi = greet("Hi");
sayHi("Tony");

var v1 = 1;
function f1() {
  f2();
}

function f2() {
  var v1 = 2;
  console.log(v1);
}

f1();

class x {
  get y() {
    return 42;
  }
}

x.get("y")();
