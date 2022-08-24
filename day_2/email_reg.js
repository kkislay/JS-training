const re = /\S+@\S+\.\S+/g;

let email = 'kulin.kislay@gmail.com'
let email_1 = "email.1.com"

console.log(re.test(email))
console.log(re.test(email_1))