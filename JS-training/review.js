//x + y = z
const arr = [1, 3, 2, 5, 4, 6, 8, 9];

function getNums(arr, sum) {
  let result = [];
  for (let i of arr) {
    let suplus = sum - i;
    arr.includes(suplus) ? result.push([i, suplus]) : null;
  }
  console.log(result);
}

getNums(arr, 9);

function getNumssss(arr, sum) {
  let result = [];
  arr.map((i) => {
    let suplus = sum - i;
    arr.includes(suplus) ? result.push([i, suplus]) : null;
  });
  return result;
}

console.log(getNumssss(arr, 9));
