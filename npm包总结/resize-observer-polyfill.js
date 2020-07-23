/*
    what is it ❓
    learn first -> MDN can search Resize ObServer API. 监听Element内容区域或SvgElement的边界框改变.
    second -> this npm package, based on MutationObserver(微任务) and uses MutationEvents as a fall back . Imortant => no polling unless DOM changes.
    Beyond that -> handles css transitions/animations and can possibly observe changes caused by CSS伪类, such as :hover
    
    methods ❓
    1`observer.observe() 开始观察指定的Element 或 SVGElement
    2`observer.disconnect() 取消和结束对所有目标的观察
    3`observer.unobserve() 取消结束观察
    
    👇基本使用

*/

import ResizeObserver from 'resize-observer-polyfill';
 
const ro = new ResizeObserver((entries) => {
    for (const entry of entries) {
        const {left, top, width, height} = entry.contentRect;
 
        console.log('Element:', entry.target);
        console.log(`Element's size: ${ width }px x ${ height }px`);
        console.log(`Element's paddings: ${ top }px ; ${ left }px`);
    }
});
 
ro.observe(document.body);


/*
    监听文档宽度, 实现适配不同屏幕的响应式方案
*/

function setup(_, ctx){
    if (!ctx.root.$isServer) {
        // 监听文档宽度
        const observer = new ResizeObserver((entries) => {
          const { width } = entries[0].contentRect;
          document.documentElement.classList.remove(Store.device);
          if (width <= 768) {
            Store.device = 'mobile';
          } else if (width > 768 && width <= 1024) {
            Store.device = 'tablet';
          } else if (width > 1024 && width <= 1440) {
            Store.device = 'laptop';
          } else if (width > 1440 && width <= 1920) {
            Store.device = 'desktop';
          } else if (width > 1920) {
            Store.device = 'wide';
          }
          console.log(Store.device);
          document.documentElement.classList.add(Store.device);
        });
        observer.observe(document.body);
  
        onUnmounted(() => {
          observer.disconnect();
        });
      }
}