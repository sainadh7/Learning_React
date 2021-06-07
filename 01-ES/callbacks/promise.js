//Call back mechanism in ES6: Promises

function addT(a,b){
    let p = new Promise((resolve,reject)=>{
       console.log("Inside addT promise");
       setTimeout(()=>{
           if(a<0 || b<0)
            throw new Error("Only Positive Numbers..!")
           resolve(a+b);
       },3000)
    });
    return p;
}
function add(a,b){
    let p = new Promise((resolve,reject)=>{
        resolve(a+b);
    })
    return p;
}

 add(10,20).then((res)=>{
     console.log(res);
 });
 addT(70,20).then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
});
addT(70,-1).then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
});

 console.log("Finished");
