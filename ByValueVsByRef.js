var c = { Greetings: "hi" };
var d = c;
d = { Greeting: "hello" }; // object replaces the value if assign to the same key
console.log("object:", c, d);

var a = 1;
var b = a;
// b = 2;
console.log("primitive:", a, b);

var arr = [1, 2, 3];
var arrCopy = arr;
arrCopy.push(4);
console.log("array:", arr, arrCopy);
