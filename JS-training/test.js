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

const findRepeatNumInArray = (arr) => {
  let hashMap = new Map();
  
  for (let i of arr) {
    hashMap.has(i) ? hashMap.set(i,true) : hashMap.set(i,false);  
  }
  console.log(...hashMap.keys());
  //找到重复项.
  return Array.from(hashMap).filter((item) => item[1] === true);

};

let result = findRepeatNumInArray([1,2,3,2,4,6,5,3]);
console.log(result)