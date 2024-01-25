import { Play } from "@icon-park/vue-next";

class Girl {
    name(): void{
        console.log("I'm a girl");
    }
}

class Player {
    name(): void{
        console.log("I am Ka01Ki")
    }
}

// var obj = new Girl();
// obj.name();
var play = new Player();
play.name();

let name: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;
console.log(words);

let arrayList: any[] = [1, false, 'fine']
console.log(arrayList[2])

arrayList[1] = 100;

console.log(arrayList)

let x : never;
var global_num = 12          // for global
class Numbers { 
   num_val = 13;             // for class
   static sval = 10;         // for static
   
   storeNum():void { 
      var local_num = 14;    // for function
   } 
} 
console.log("全局变量为: "+global_num)  
console.log("静态变量为: " +Numbers.sval)   
var obj = new Numbers(); 
console.log("实例变量为: "+obj.num_val)