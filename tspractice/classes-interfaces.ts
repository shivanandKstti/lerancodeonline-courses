// oops 

// objects
//  classes 

class Department {
    // name: string; // property, default pubic access modifier
    private employees: string[] = []; // private access modifier

    // spl method, executed when the object gets created
    //shorthad initialization
    constructor(public id: string, public  name: string){
        this.name = name;
    } 

    describe(){
        console.log(`Department in d ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// inheritance

class ITDepartment extends Department {
    admins: string[];
    constructor(public id: string, admins: string[]){
        super(id, 'IT');
        this.admins  = admins;
    }
}



const acc = new  Department('D1','accounting');
// // console.log(acc)
// console.log(acc.describe())

// acc.addEmployee('name1')
// acc.addEmployee('name2')

// acc.printEmployeeInfo();
