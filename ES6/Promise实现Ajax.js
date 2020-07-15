const getJson = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve("ok");
      } else {
        reject(new Error("error"));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader = ("Accept", "application/json");
    client.send();
  });
  return promise;
};

const getjson = (url) => {
  const promise = new Promise((res, rej) => {
    const handler = function () {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve("ok");
      } else {
        reject(new Error("error"));
      }
    };

    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader = ("Accept", "application/json");
    client.send();
  });
  return promise;
};

getJson("/posts.json").then(
  (resolve) => console.log(resolve),
  (reject) => console.log("error" + reject)
);

//生成一个promise对象数组
const promises = [1, 2, 3, 4].map((index) => {
  return getJson("/post" + index + ".json");
});

Promise.all(promises)
  .then((posts) => {})
  .catch((reason) => {});

var myIterable = [];
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable];
