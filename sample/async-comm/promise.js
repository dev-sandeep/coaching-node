function sample(){
    return new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve("sample hello");        
      },100);  
    })
}

sample().then((text)=>{
    console.log("data: "+text);
});