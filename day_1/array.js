let a = []
console.log(a, typeof a)
console.log(Array.isArray(a)) // used to check if a given variable is array or not
a.push(20)
a.push(10)
console.log(a) // index of array starts with 0
console.log(a.length)  // its a property not a function
console.log(a[0])

for (let i=0;i<a.length;i++)
console.log(a[i])
// sometimes we may want to apply a function on each and every element in a given array. We can do it with help of map function

let b = a.map(data => data*data)
console.log(b)

let c = a.filter(data =>data > 10)
console.log(c)