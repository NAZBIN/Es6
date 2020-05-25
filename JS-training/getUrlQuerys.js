console.time('global');
const str =
  "http://www.taobao.com/1111/my/index.html?userId=293019239304&title=我的双11";

function getQuery(input) {

    let [args, output] = [[],{}];

    args = input.split('?')[1].split('&');
    
    Object.keys(args).forEach(i => {
        let left = args[i].split('=')[0];
        let right = args[i].split('=')[1];
        Object.assign(output,{[left]:right});
    });
    return output;
}

console.log(getQuery(str));
console.timeEnd('global');