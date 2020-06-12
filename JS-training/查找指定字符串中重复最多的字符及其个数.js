// output: 'aaa' 3

const computeMaxReapt = (s) => {
  const keys = Array.from(new Set(s.split("")));
  const values = Array(keys.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    const temp = keys.indexOf(s[i]);
    console.log(temp);
    temp != -1 ? values[temp]++ : null;
  }

  console.log(
    keys[values.indexOf(Math.max(...values))] + " ：" + Math.max(...values)
  );
};

computeMaxReapt("afsafafaavvsb");
