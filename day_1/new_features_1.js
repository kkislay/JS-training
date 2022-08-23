class person{
    constructor (name, age) {
        this.name=name
        this.age=age
    }

    display = () => {
        console.log(this.name, this.age)
    }

}
let p1 = new person('John', 10)
p1.display()