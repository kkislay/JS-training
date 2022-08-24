var emp = {
    id:1,
    age:20
}

//Object.assign takes 3 parameters: empty object, source and change (optional)
var e1 = Object.assign({}, emp, {id:2})
console.log(emp)
console.log(e1)