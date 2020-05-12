const getJson = function(){
    const promise = new Promise(function(resolve, reject){
        const handler = function(){
            if(this.readyState !== 4) return;
            if(this.status === 200){
                resolve("ok");
            } else {
                reject(new Error("error"));
            }
        };
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader = ("Accept", "application/json");
        client.send();
    });
    return promise;
}

getJson("/posts.json").then((resolve) => console.log(resolve),(reject) => console.log("error"+reject))