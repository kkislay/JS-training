type address = {street:number, city:string}
type user= {name:string, age:number, address:address}
let a1 :address = {street:1,city:'Dublin'}
let u1 :user  = {name:'jhno', age:30, address:a1}

let u2:user = {name:'est', age:37, address:a1}
console.log(u1)