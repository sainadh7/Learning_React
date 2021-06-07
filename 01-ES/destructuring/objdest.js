// we give ket names in the { }
let customer = {
    id: 11,
    name: "Krishna",
    email: "abc@a.com"
}

let {id,email} = customer
console.log(id)
console.log(email)

id = 13;
console.log(id)
console.log(customer.id)

let ncustomer = {...customer, phone:"1234567873"}
console.log(ncustomer)

ncustomer = {...customer, phone:"1234567873", id:10}
console.log(ncustomer)