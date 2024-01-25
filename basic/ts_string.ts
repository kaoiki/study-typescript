var str = new String( "This is string" ); 
console.log("str.constructor is:" + str.constructor)

var str = new String("RUNOOB"); 
console.log("str.charAt(0) 为:" + str.charAt(0)); // R
console.log("str.charAt(1) 为:" + str.charAt(1)); // U 
console.log("str.charAt(2) 为:" + str.charAt(2)); // N 
console.log("str.charAt(3) 为:" + str.charAt(3)); // O 
console.log("str.charAt(4) 为:" + str.charAt(4)); // O 
console.log("str.charAt(5) 为:" + str.charAt(5)); // B


var str = new String("RUNOOB"); 
console.log("str.charCodeAt(0) 为:" + str.charCodeAt(0)); // 82
console.log("str.charCodeAt(1) 为:" + str.charCodeAt(1)); // 85 
console.log("str.charCodeAt(2) 为:" + str.charCodeAt(2)); // 78 
console.log("str.charCodeAt(3) 为:" + str.charCodeAt(3)); // 79 
console.log("str.charCodeAt(4) 为:" + str.charCodeAt(4)); // 79
console.log("str.charCodeAt(5) 为:" + str.charCodeAt(5)); // 66

var str1:string = "Hello ";
var str2:string = "World";
var str3 = str1.concat( str2 ); 
console.log("str1 + str2 : "+str3) // Hello World
console.log("查找的字符串位置 :" + str3.indexOf("World") ); 

str="The rain in SPAIN stays mainly in the plain"; 
var n=str.match(/ain/g);
console.log("匹配的字符串 :" + n) //ain

var re = /apples/gi; 
var str:String = "Apples are round, and apples are juicy.";
if (str.search(re) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log("Contains Apples" ); 
} 

var str:String = "Apples are round, and apples are juicy."; 
var splitted = str.split(" ", 3); 
console.log(splitted)  // [ 'Apples', 'are', 'round,' ]

