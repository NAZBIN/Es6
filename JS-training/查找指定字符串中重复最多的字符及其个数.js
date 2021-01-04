// output: 'aaa' 3

const computeMaxRepeat = (s) => {
  const keys = Array.from(new Set(s.split("")));
  const values = Array(keys.length).fill(0);

  // for (let i = 0; i < s.length; i++) {
  //   const temp = keys.indexOf(s[i]);

  //   if (temp != -1) values[temp]++;
  // }
  for (let i of s) {
    const temp = keys.indexOf(i);

    if (temp != -1) values[temp]++;
  }

  return keys[values.indexOf(Math.max(...values))] + ":" + Math.max(...values);
};

console.log(computeMaxRepeat("afsafafaavvsb"));
