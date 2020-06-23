const sampling = (arr, n) => {
  let trigger = true;
  let result = [];
  while (trigger) {
    const ranNum = Math.floor(Math.random() * arr.length);
    result.length !== n && result.indexOf(arr[ranNum]) === -1
      ? result.push(arr[ranNum])
      : 0;
    result.length === n ? (trigger = !trigger) : 0;
  }
  return result;
};

console.log(sampling([13, 4, 2, 5, 6, 21, 3, 9], 5));
