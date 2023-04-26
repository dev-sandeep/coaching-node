function process(file){
    console.log("processing - "+file);
}

function download(callbackFn){//impure
    setTimeout(function(){
        console.log("download");
        callbackFn("some song!!");
    },1000)
}

download(process);