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