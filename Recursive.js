var f1 = () => {
  let level = 0;
  function f2(level) {
    if (level === 10) return;
    console.log(level);
    f2(level + 1);
  }

  f2(level);
};

console.log(f1());
