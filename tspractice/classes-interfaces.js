"use strict";
// oops 
// objects
//  classes 
class Department {
    // spl method, executed when the object gets created
    //shorthad initialization
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string; // property, default pubic access modifier
        this.employees = []; // private access modifier
        this.name = name;
    }
    describe() {
        console.log(`Department in d ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// inheritance
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.id = id;
        this.admins = admins;
    }
}
const acc = new Department('D1', 'accounting');
// // console.log(acc)
// console.log(acc.describe())
// acc.addEmployee('name1')
// acc.addEmployee('name2')
// acc.printEmployeeInfo();
