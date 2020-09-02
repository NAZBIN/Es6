/*
    懒加载 lazyload demo. 👉 只有目标区域可见时，才会将模板内容插入到真实DOM，从而引发静态资源的加载。
*/

function query(selector){
    return Array.from(document.querySelector(selector));
}

var observer = new IntersectionObserver(function(changes){
    changes.forEach((change) => {
        let container = change.target;
        let content = change.querySelector('example').innerHTML;
        container.append(content);
        observer.unobserve(container);
    })
},{})

query('.lazy-load').forEach((item) => observer.observe(item));