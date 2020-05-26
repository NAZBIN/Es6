function addEvent(element, type ,handler){
    //DOM二级
    if(element.addEventListener){
        element.addEventListener(type,handler,false); //false为冒泡.  true为捕获
    } else if (element.attachEvent){
    //IE
        element.attachEvent('on' + type,()=>{
            handler.call(element);
        });
    } else {
        element['on'+ type] = handler;  //DOM 0 级。
    }
}

