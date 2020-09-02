/*
    懒加载 lazyload demo.
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