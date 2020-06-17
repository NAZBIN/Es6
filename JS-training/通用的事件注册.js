function addEvent(element, type, handler) {
  //DOM二级
  if (element.addEventListener) {
    element.addEventListener(type, handler, false); //false为冒泡.  true为捕获
  } else if (element.attachEvent) {
    //IE
    element.attachEvent("on" + type, () => {
      handler.call(element);
    });
  } else {
    element["on" + type] = handler; //DOM 0 级。
  }
}

function addEvent(ele, type, handler) {
  if (ele.addEventListener) {
    ele.addEventListener(type, handler, false);
  } else if (ele.attachEvent) {
    ele.attachEvent("on" + type, () => {
      handler.call(ele);
    });
  } else {
    element["on" + type] = handler;
  }
}
