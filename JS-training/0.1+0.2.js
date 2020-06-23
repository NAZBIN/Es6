//可以用Es6新增的Number.EPSILON的方法来设置"能够接收的误差范围"

const verifyFunc = (left, right) => {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
};

console.log(verifyFunc(0.1 + 0.2, 0.3));
