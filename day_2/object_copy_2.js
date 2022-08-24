var emp = {
    id:1,
    age:20
}

// ... is a spread operator used to copy and replace a value from any object.
var emp1= {...emp,id:2}
console.log(emp)
console.log(emp1)