let str = "a d ec b ";

//regx
function trimBlack(s) {
  const reg = /\s+/g;
  return s.replace(reg, "");
}

//json
function trimBlackByJson(s) {
  return s.split(" ").join("");
}
console.log(trimBlack(str));
console.log(trimBlackByJson(str));
