const quickSort = (arr, left, right) => {
  if (left > right) return;

  left = left || 0;
  right = right || arr.length - 1;

  let [i, j] = [left, right];
  let pivlot = arr[left];

  while (i < j) {
    while (i < j && arr[i] <= pivlot) {
      i++;
    }
    while (i < j && arr[j] >= pivlot) {
      j--;
    }
    if (i < j) {
      let temp = arr[i];
      [arr[i], arr[j]] = [arr[j], temp];
    }
  }

  [arr[left], arr[i]] = [arr[i], pivlot];

  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);

  return arr;
};
let arr = [13, 21, 8, 7, 9, 56, 4, 11, 27];
console.log(quickSort(arr));
