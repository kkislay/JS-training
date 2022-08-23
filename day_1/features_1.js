// arrow function - arrow functions provide a simple way of writing functions
//arrow functions make it easier to use one function within anothr func
// rules - 1) if no parameter within a given function then we have to pass empty round bracket
//          2) if there is sungle parameter then no need of round brakcet
//          3) if more than 1 parameter then () is required
// General syntax 
// var = parameter => {body}
// rule 4 if there is only a single statement in the body then no need of curly brackets and no need of retrn statements.

var hello =() => console.log('hello')

hello ()

var square =n => n*n

console.log(square())

var sum = (a,b) => a+b
console.log(sum(40,50))

var sample = () => {
    console.log('hello')
    console.log('hello again')
}
// arrow functions are auto bindable
sample()