const asyncTest =  async function (){
    console.log('1');
    await sleep(1000).catch(e=> console.log("error"));
    console.log('2');
}

function sleep(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> reject(),t)
    })
}
asyncTest();