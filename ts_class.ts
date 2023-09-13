class Car {
    engine:string;

    constructor(engine:string) {
        this.engine = engine;
}

    disp():void {
        console.log("Your Engine is " + this.engine);
    }
}

var object = new Car("Petrol");
object.disp();

class Shape {
    Area:number

    constructor(a:number){
        this.Area = a;
    }
}

class Circle extends Shape {
    disp():void {
        console.log("Area of circle is " + this.Area);
    }
}

var area = new Circle(10);
area.disp();

class Root { 
    hello:string; 

    constructor(hello:string) {
        this.hello = hello;
    }
 } 

 class Child extends Root{}
 class Leaf extends Child{}

 var leaf = new Leaf("hello");
 console.log(leaf.hello)
 leaf.hello = "Hello World";
 console.log(leaf.hello)

 class PrintFather {
    doPrint():void {
        console.log("doPrint func from Father class")
    }
 }

 class PrintSon extends PrintFather {
    doPrint():void {
        super.doPrint();
        console.log("doPrint func from Son class")
    }
 }

 var son = new PrintSon();
 son.doPrint();

 class StaticDemo{
    static num:number;
    static disp():void {
        console.log("Static value = " + StaticDemo.num);
    }
 }

 StaticDemo.num = 10;
 StaticDemo.disp();

 class Person{}

 var obj = new Person;
var isObj = obj instanceof Person;
console.log("obj对象是否为Person的实例" + isObj);

interface ILoan {
    interest:number
}

class AgriLoan implements ILoan {
    interest: number;
    rebate: number

    constructor(interest:number, rebate:number) {
        this.interest = interest;
        this.rebate = rebate;
    }
}

var agriLoan = new AgriLoan(10, 20);
console.log("利润为 : "+agriLoan.interest+"，抽成为 : "+agriLoan.rebate )