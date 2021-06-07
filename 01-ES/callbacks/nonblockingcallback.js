//Call back mechanism in ES5
let addDelay = (num)=>{
    for(i=0;i<num;i++){
    }
    return i;
}
function add(a,b,fn){
    setTimeout(()=>{
        fn(a+b);
    },3000)  
}

 add(10,50,(result)=>{
     connsole.log(result)
 });

 console.log("Finished");
