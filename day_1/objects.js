let obj1 = {}  //empty obj
console.log(obj1)

obj1['name'] = 'John'
obj1['age'] = 22

// in objects you can use index as numbers or strings
// in array index can only be numbers
console.log(obj1)

let obj2 = {'name': 'John', 'address' :{'state':'AZ', 'country':'US'}}
console.log(obj2.address)
console.log(obj2.address.country)

let obj3 = {'name':'John', 'age': 25}

for (let property in obj3){
    console.log(property)
}

console.log(obj3['name'])