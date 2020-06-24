const arr = [1, 3, 2, 5, 4, 6, 8, 9];
const temp = [];
const getAnswer = (arr, sum) => {
  const newArr = Array.from(new Set(arr));
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    index = temp.indexOf(newArr[i]);
    if (index !== -1) {
      return [index, newArr[i]];
    } else {
      temp[newArr[i]] = sum - newArr[i];
    }
  }
};

console.log(getAnswer(arr, 9));
