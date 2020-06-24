const getResult = (arr) => {
  return arr.filter((v) => arr.indexOf(v) === arr.lastIndexOf(v));
};

console.log(getResult([1, 3, 2, 1, 4, 6, 2, 4]));
