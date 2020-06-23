const result = "aabbaaaccdeee".replace(/(.)\1*/g, "$1");
console.log(result);
