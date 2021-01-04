// var findRepeatNumber = function (nums) {
//   let map = new Map();
//   for (const i of nums) {
//     if (map.has(i)) {
//       console.log(i);
//     } else {
//       map.set(i, false);
//     }
//   }
// };

// findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);

const findRepeat = (nums) => {
  let map = new Map();
  for (const i of nums) {
    map.has(i) ? console.log(i) : map.set(i, false);
  }
  console.log(map);
};

findRepeat([2, 3, 1, 0, 2, 5, 3]);
