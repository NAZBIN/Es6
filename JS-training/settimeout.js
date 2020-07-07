// function setTimeout(callback, delay) {
//   let timer;
//   let startTime = Date.now();

//   const loop = () => {
//     console.log("111");
//     timer = window.requestAnimationFrame(loop);
//     if (Date.now() - delay >= startTime) {
//       callback();
//       window.cancelAnimationFrame(timer);
//     }
//   };
//   window.requestAnimationFrame(loop);
// }

// console.log("start");
// setTimeout(() => {
//   console.log("success");
// }, 3000);
// console.log("end");

// function settimeout(callback, delay) {
//   const startTime = Date.now();
//   let timer;
//   const loop = () => {
//     timer = window.requestAnimationFrame(loop);
//     if (Date.now() - startTime >= delay) {
//       callback();
//       window.cancelAnimationFrame(timer);
//     }
//   };
//   window.requestAnimationFrame(loop);
// }
// console.log("start");

// settimeout(() => {
//   console.log("success");
// }, 3000);

// console.log("end");

function setTimeout(callback, delay) {
  let timer;
  let now = Date.now();
  const loop = () => {
    timer = window.requestAnimationFrame(loop);
    if (Date.now() - now >= delay) {
      callback();
      cancelAnimationFrame(timer);
    }
  };
  window.requestAnimationFrame(loop);
}

setTimeout(() => {
  console.log("success");
}, 3000);

console.log("end");
