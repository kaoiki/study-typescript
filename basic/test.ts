let myadd = function(a:number, b:number):number {
    return a+b;
}
console.log("5+4 = "+myadd(5,4))

let youradd = (a:number, b:number):number =>{return a+b}
console.log("6+7=",youradd(6,7)) 

class Person {
    private name: string
    private age: number
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public getPersonInfo(): string {
      return `My name is ${this.name} and age is ${this.age}`;
    }
  }

  let person = new Person("John", 25);
  console.log(person.getPersonInfo());

  class Employee extends Person {
    private department:string;

    constructor(name: string, age: number, department:string) {
      super(name, age);
      this.department = department;
    }

    public getEmployeeInfo(): string {
        return this.getPersonInfo() + `and work in ${this.department} department`;
    }
  }

  let employee = new Employee("Jim", 30, "IT");
  console.log(employee.getEmployeeInfo());

  let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

let list = [4, 5, 6];

//iterator key
for (let i in list) {
    console.log(i); 
}

//iterator value
for (let i of list) {
    console.log(i); 
}