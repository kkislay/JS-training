function multiply (fixed){
    return function(variable){
        return fixed * variable 
    }
}

let a = multiply(4)  // this returns a funciton which is stored in variable a
let result = a(10)  // inner function is called, this is known as lazy evaluation
console.log(result)
result = a(20)
console.log(result)