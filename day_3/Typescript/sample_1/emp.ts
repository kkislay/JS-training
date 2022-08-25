export class Emp {name:string
age:number 
salary:number
designation :string | undefined
//union type in TS implies a variable can have type1, type2... typeN

//question mark stands for optional parameter
constructor(name:string, age:number, salary:number, designation?:string){
    this.name =name
    this.age=age
    this.salary=salary
    this.designation=designation

}
//within a class don't use funciton keyboard
 display(){
    if (this.designation)
    console.log(`name:${this.name} age:${this.age} salary:${this.salary} designation:${this.designation}`)
    else 
    console.log(`name:${this.name} age:${this.age} salary:${this.salary}`)
}}