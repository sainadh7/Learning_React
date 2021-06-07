//Callback mechanism in ES7. Promises was making the code complex
//async and await keywords: 
//async function will return a promise and await makes a function
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
async function div(a,b){
    return a/b;
}
async function test(){
    let res = await addT(20,89);
    console.log(res);
}
async function testDiv(){
    let res = await div(20,89);
    console.log(res);
}


testDiv();
 console.log("Finished");
