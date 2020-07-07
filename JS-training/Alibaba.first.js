/*
input: http://www.taobao.com/1111/my/index.html?userId=293019239304&title=我的双11
output: {"userId":293019239304,"title":"我的双11"}
题目：  编写一个函数，函数输入内容类似于 input 的字符串，  要求返回output定义的类似的对象结果。
*/

const str =
  "http://www.taobao.com/1111/my/index.html?userId=293019239304&title=我的双11";

function getQueryFun(input) {
  let arr = input.split("?")[1];
  console.log(arr);
}

function getQuery(input) {
  // judge

  var url = input.split("?")[1];

  var result = new Object();
  if (url.indexOf("?") != -1) {
    var s = url.substr(1);
    strs = s.split("&");

    for (var i = 0; i < strs.length; i++) {
      result[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
    }
  }
  return result;
}

console.log(getQuery(str)); // =>  {"userId":293019239304,"title":"我的双11"}

function queryHandler(input) {
  let result = {};
  let readyHandles = input.split("?")[1].split("&");
  for (let i of readyHandles) {
    let combine = i.split("=");
    Object.assign(result, { [combine[0]]: combine[1] });
  }
  return result;
}

queryHandler(str);

console.time("global");
const str =
  "http://www.taobao.com/1111/my/index.html?userId=293019239304&title=我的双11";

function getQuery(input) {
  let [args, output] = [[], {}];

  args = input.split("?")[1].split("&");

  Object.keys(args).forEach((i) => {
    let left = args[i].split("=")[0];
    let right = args[i].split("=")[1];
    Object.assign(output, { [left]: right });
  });
  return output;
}
const str = window.location.search;
console.log(getQuery(str));
console.timeEnd("global");

/**
 * 实现一个`Foo`方法，接受函数`func`和时间`wait`
 * 返回一个新函数，新函数即时连续多次执行，但也只限制在`wait`的时间执行一次
 */
function Foo(func, wait) {
  let privous = 0; //之前的时间

  return function () {
    let now = new Date(); //当前时间
    let that = this;

    if (now - privous >= wait) {
      func.apply(that, arguments);
      privous = now;
    }
  };
}

function Foo(func, wait) {
  let [timer, last] = [null, null];
  return (...args) => {
    let curTime = new Date();
    if (last && last + wait < curTime) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
        last = now;
      });
    } else {
      func.apply(this, args);
      last = now;
    }
  };
}
function Foo(fun, wait) {
  if (typeof Foo !== "function") {
    throw new TypeError("error");
  }
  let timer;
  let last;

  return function () {
    let now = Date.now();
    if (last && now - last < wait) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun.apply(this, arguments);
        last = now;
      }, wait);
    } else {
      fun.apply(this, arguments);
      last = now;
    }
  };
}

function test() {
  console.log("success");
}

let func = Foo(test, 2000);

func();
func();

/**
 * 字符串填充
 * 说明：实现一个 padStart 方法，用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。
 *   填充从当前字符串的开始(左侧)开始的。
 *   1. 语法：padStart(str, len [, chars])
 *   2. 参数 str ，当前字符串
 *   3. 参数 len ，当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身
 *   4. 参数 chars ，可选，填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断
 *   5. 返回填充后的字符串
 * 示例：
 *   padStart('abc', 10);         // '       abc'
 *   padStart('abc', 10, 'foo');  // 'foofoofabc'
 *   padStart('abc', 6,'123465'); // '123abc'
 *   padStart('abc', 6, '_-');    // '_-_abc'
 *   padStart('abc', 8, '0');     // '00000abc'
 *   padStart('abc', 1);          // 'abc'
 */
function padStart(str, len, chars) {
  let curLen = str.length;
  let surplus = len - curLen;
  let charsLen = chars.length;

  let enhance = "";

  for (var i = 0; i < surplus; i++) {
    if (i > charsLen - 1) {
      surplus = surplus - charsLen;
      i = 0;
    }
    enhance += chars[i];
  }

  return enhance.concat(str);
}

function padStart(str, len, chars = " ") {
  if (len < str.length) return str;

  const [cur, add, output] = [str.length, chars.length, str];
  const surplus = len - cur;
  let temp = [];

  for (let i = 0; i < surplus - 1; i++) {
    let j = i > add - 1 ? i - add : i;
    temp.push(chars[j]);
  }

  return temp.toString().split(",").join("") + output;
}

console.log(padStart("abc", 10, "foo"));

function padStart(str, len, chars = "") {
  if (len < str.length) return str;
  const suplus = len - str.length;
  const refer =
    suplus > chars.length
      ? chars.repeat(Math.ceil(suplus / chars.length))
      : chars;
  return refer.slice(0, suplus) + str;
}

console.log(padStart("1235", 12, "aabbcc"));
