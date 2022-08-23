function person (name,age){
this.name = name
this.age = age

this.display = function (){
    console.log(this.name, this.age)
}
}

person.prototype.display2 = function () {
    console.log(this.name, this.age)
}
let p1 = new person('John', 20)
console.log(p1)
p1.display()
p1.display2()