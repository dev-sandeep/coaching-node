function process(fileName){
    console.log("processing", fileName);
}

function download(){
    const promiseObj = new Promise(function(resolve, reject){
        // all process goes here
        setTimeout(function(){
            console.log("download");
            // api call was successful
            // resolve("all is well mp3");
            reject();
        }, 1000)
    });

    return promiseObj;
}

function successHandler(fileName){
    process(fileName);
}

function failHandler(fileName){
    console.log("failed!!");
}

download().then(successHandler, failHandler)