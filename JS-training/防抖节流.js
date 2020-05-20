//防抖
function debounce(fn, delay){
    const timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this,args)
        },delay);
    }
}
//节流
function throttle(fn, dur){
    const [last,timer,args] = [null,null];
    return (...args) => {
        let now = new Date();
        if(last && now <last + delay){
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this,args);
                last = now;
            },delay)
        }else{
            fn.apply(this,args);
            last = now;
        }
    }
}
