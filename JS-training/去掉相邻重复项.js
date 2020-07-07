const result = "aabbaaaccdeee".replace(/(.)\1*/g, "$1");
console.log(result);

const res = "aaabbcccsdsssnnnq".replace(/(.)\1*/g, "$1");
console.log(res);

const res2 = "aaaccsbbqnzzlll".replace(/(.)\1*/g, "$1");
console.log(res2);
