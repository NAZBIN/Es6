const check = s => {
    return s === s.split('').reverse().join('');
}

console.log(check('aba'));