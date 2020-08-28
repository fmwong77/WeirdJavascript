const obj = {
  log: ["a", "b", "c"],
  latest: function () {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  },
  get getterFunction() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  },
};

console.log(obj.latest());
console.log(obj.getterFunction);

// expected output: "c"

let a,
  b = 1;
a = 0;
console.log(a, b);
