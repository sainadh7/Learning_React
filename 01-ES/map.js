//map returns an array..
let nos = [20,30,40,50]

let nxnums = nos.map((item)=>{
    return item + 1;
})
//[21,31,41,51]
console.log(nxnums);

let msgs = ["hello","world"]
let uarray = msgs.map((txt)=>{
    return txt.toUpperCase();
})
console.log(msgs);
console.log(uarray);

//let dict = [{id:"1",str:"Thisi s new"},{id:"1",str:"Thisi s new"}]
let dict = {id:"1",str:"This is new"}
for( let k in dict){
    console.log( dict[k]);
}