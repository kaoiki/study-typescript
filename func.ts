function say(msg?:string):string {
    if (msg === undefined) {
        return "hello " + "ka01ki";
    } else {
        return "hello " + msg;
    }
}

function hello(msg:string="alalei"):string {
    return "hello " + msg;
}
console.log(hello());
console.log(say("world"));
console.log(say());

function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 

    nums.forEach(element => {
        sum+= element
    });
    
    console.log("和为：",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)


 let talk = (msg:string) => console.log("hello " + msg);

talk("china");

(function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()
 
 //new Function ([arg1[, arg2[, ...argN]],] functionBody)
 //[arg1[, arg2[, ...argN]],] 参数
 //functionBody包含表达式的字符串
 var my = new Function("a", "b", "return a * b"); 
var x = my(4, 3); 
console.log(x);

function factorial(num:number):number {
    if (num <= 0) {
        return 1; 
    } else {     
        return (num * factorial(num - 1));
    } 
}; 
console.log("result is "+factorial(6));  

var foo = (x:number):number=>x*x;
console.log(foo(10));