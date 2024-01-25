let j:any;
let n:any;

n="kaoiki";
for(j in n) {
    console.log(n[j])  
}
console.log("element of array")
let someArray:any[] = [1, "string", false];
for(let item of someArray){
    console.log(item);
}
console.log("forEach")
//因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 取代forEach。
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log("当前值:" + val + " 当前下标:" + idx + " 数组" + array);
});
list.every((val, idx, array) => {
    console.log("every")
    console.log("当前值:" + val + " 当前下标:" + idx + " 数组" + array);
    // val: 当前值
    // idx：当前index
    // array: Array
    if (val > 0) {    
        return true;}// Continues
    else {
        return false; // Quit
    } 
    // Return false will quit the iteration
    
    
});

var sarr=[1, 2, 3, 4];
for(var m of sarr){
    if(m>2) break; //out of for
    console.log(m);
}

let i:number= 0;

while(i<10) {
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++;
}while(i<10);
