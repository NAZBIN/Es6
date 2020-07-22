function logInOrder(urls) {
  let textPromises = [];
  urls.map(async (url) => {
      const response = await fetch(url);
      texPromise.push(response.text());
  })
  //顺序依次输出
  for(const result of textPromises) {
      console.log(await result);
  }
}
