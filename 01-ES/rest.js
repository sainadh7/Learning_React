//rest: ...  passing multiple params to function
function print(msg){
    console.log(msg)
}
function printAll(...msg){
    console.log(msg)
}

print('Hello',"World")
printAll('Hello',"World")