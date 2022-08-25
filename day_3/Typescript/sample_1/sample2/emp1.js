"use strict";
/// <reference path="stringUtils.ts" />
class Employee {
    constructor(name, code) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    }
}
let e11 = new Employee('John', 1234);
e11.displayEmployee();
