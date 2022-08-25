"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emp = void 0;
class Emp {
    //union type in TS implies a variable can have type1, type2... typeN
    //question mark stands for optional parameter
    constructor(name, age, salary, designation) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
    //within a class don't use funciton keyboard
    display() {
        if (this.designation)
            console.log(`name:${this.name} age:${this.age} salary:${this.salary} designation:${this.designation}`);
        else
            console.log(`name:${this.name} age:${this.age} salary:${this.salary}`);
    }
}
exports.Emp = Emp;
