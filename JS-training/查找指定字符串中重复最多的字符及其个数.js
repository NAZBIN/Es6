// output: 'aaa' 3

//思路：首先对数组去重然后统计每个字符的个数最后输出最多的
const computeMaxRepeat = (s) => {
  if (!typeof s === "string") return;

  const keys = Array.from(new Set(s.split("")));
  let values = new Array(keys.length).fill(0);
  let max = values;

  for (let i = 0; i < s.length; i++) {
    const index = keys.indexOf(s[i]);
    index > 0 ? (values[index] += 1) : null;
  }

  max = Math.max.apply(Array, values);

  return keys[values.indexOf(max)].repeat(max) + " " + max; // aaa 3;
};

const str = "bcaaammo";
console.log(computeMaxRepeat(str));
