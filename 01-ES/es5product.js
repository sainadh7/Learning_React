//In ES we can define a class in this way
function Product(id,name,price){
    this.id = id;
    this.name = name;
    this.price = price;

    this.display = function(){
        console.log(this.id + ':' + this.name +':' + this.price);
    }
}

var p = new Product(1,"Computer",100)
p.display()

