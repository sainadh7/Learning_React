//ES6 introduced the class construct.
class Product{
    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    display(){
        setTimeout(function(){
            console.log(this.id + ':' + this.name +':' + this.price);
        },3000)
    }
    displayArrow(){
        setTimeout(()=>{
            console.log(this.id + ':' + this.name +':' + this.price);
        },3000)
    }
}

let p = new Product(1,"Laptop",1000);
p.display();
p.displayArrow();