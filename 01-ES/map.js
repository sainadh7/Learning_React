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
