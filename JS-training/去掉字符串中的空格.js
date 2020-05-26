let str = "a d ec b ";

function trimBlack(s) {
    const reg = /\s+/g;
    return s.replace(reg,'');
}

console.log(trimBlack(str));