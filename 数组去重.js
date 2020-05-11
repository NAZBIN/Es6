let arr = [1,3,3,4,2,5,4];
//方法一: Set
function trimRepeatBySet(arr){
    let result = new Set();
    arr.forEach(x=> set.add(x));
    return result;
}

//方法二: Map
function trimReapeatByMap(arr){
    let map = new Map();
    let result = new Array();
    for(let i = 0; i < arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i],true);
        }else{
            map.set([arr[i]],false);
            result.push(arr[i]);
        }
    }
    return result;
}
//方法三: IndexOf
function trimReapeatByIndexOf(arr){
    if(!Array.isArray(arr)){
        console.log("type error");
        return
    }
    var result = new Array();
    for(var i=0; i < arr.length; i++){
        if(result.indexOf(arr[i] === -1)){
            result.push(arr[i]);
        }
    }
    return result;
}