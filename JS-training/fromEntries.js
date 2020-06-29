// Object.Entries()

const map = new Map([
  ["1", "s"],
  ["2", "d"],
  ["3", "q"],
]);

console.log(Object.fromEntries(map));

const arr = [3, 5, 1, 2, 7];

const vals = arr.entries();

console.log(Object.fromEntries(vals));

const obj = {
  a: "something",
  b: 1,
};

console.log(Object.entries(obj));

console.log(Object.getOwnPropertyNames(obj));

console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);

console.log(Object.values(arr));
console.log(arr.toString());
console.log(obj.toString());
//Object.fromEntries() 是 Object.entries()的反转

//Object.fromEntries可用于把一个map键值对转化成一个对象
//Object.fromEntries还可以用于把数组转换成对象. 1. arr.entries()返回一个迭代器

//Object.entries()将对象转化成键值对的形式(map).
