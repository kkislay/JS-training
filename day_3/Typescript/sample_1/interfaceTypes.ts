type CommonDetail = {name:string, age: number}
type Email ={email:string}
type EmailDetails = CommonDetail & Email

let e1: EmailDetails={name:'john', age:24, email:'test.com'}

interface UserWithEmail extends CommonDetail{
    Email:string
}
let e2: EmailDetails={name:'john', age:24, email:'tesintert.com'}

console.log(e1)
console.log(e2)