interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = {
    firstName : "Zhou",
    lastName: "daodao",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}


console.log(employee.fullName());