let addDelay = (num)=>{
    for(i=0;i<num;i++){
    }
    return i;
}
function add(a,b){
    setTimeout(()=>{
        return a+b;
    },3000)
    
}

let result = add(10,50)
console.log(result)
