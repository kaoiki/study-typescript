var sites:string[] = new Array("Google","kaoiki","Taobao","Facebook") 
 
for(var i = 0;i<sites.length;i++) { 
        console.log(sites[i]) 
}

var [w,x,y,z] = sites
console.log("w=",w)
console.log("x=",x)
console.log("y=",y)
console.log("z=",z)

console.log("Reversed array is : " + sites.reverse() ); 

//remove element
var arr = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );    // orange,mango,water,banana,sugar,tea 
console.log("removed is: " + removed); 
          
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  // orange,mango,water,sugar,tea 
console.log("removed is: " + removed);  // banana
console.log("Returned string is : " + arr.sort() );  

//迭代
var j:any; 
var nums:number[] = [1001,1002,1003,1004] 
 
for(j in nums) { 
    console.log(nums[j]) 
}

var total = nums.reduce(function(a, b){ return a + b; }); 
console.log("total is : " + total ); 

var multi:number[][] = [[1,2,3],[23,24,25]]  
console.log(multi[0][0]) 
console.log(multi[0][1]) 
console.log(multi[0][2]) 
console.log(multi[1][0]) 
console.log(multi[1][1]) 
console.log(multi[1][2])