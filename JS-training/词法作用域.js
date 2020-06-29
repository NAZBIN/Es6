function CreateObj(){
    this.name = 'geek'
}
var myObj = new CreateObj();

var tempObj = {};
CreateObj.call(tempObj);
return tempObj;