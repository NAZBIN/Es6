console.time("global");
const str =
  "http://www.taobao.com/1111/my/index.html?userId=293019239304&title=我的双11";

const getQuery = (url) => {
  const result = {};
  let args = url.split("?")[1].split("&");
  args.forEach((val) => {
    let temp = val.split("=");
    Object.assign(result, { [temp[0]]: temp[1] });
  });
  console.log(result);
};

getQuery(str);
