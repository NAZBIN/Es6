var findNumberIn2DArray = function (matrix, target) {
  if (!Array.isArray(matrix) || matrix.length === 0) return false;
  let mins = [];
  let result = false;

  matrix.forEach((x) => {
    mins.push(x[0]);
  });

  for (let i = 0; i < mins.length; i++) {
    if (
      target >= mins[i] &&
      (result = matrix[i].indexOf(target) !== -1 ? true : false)
    )
      break;
  }

  return result;
};

let arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
console.log(findNumberIn2DArray([], 0));
