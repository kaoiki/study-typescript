var human = {
    father: "michael",
    mother: "marry",
    son: ["bill","john"],
    dog: function() {
        console.log("i am cat not DooooG")
    },
    say:function() {}
}

console.log(human.father)
console.log(human.son)
console.log(human.mother)
human.dog()

human.say = function() {
    console.log("hello " + human.mother)
}
human.say()

var sites = {
    site1: "Taobao",
    site2: "Google",
    site3: "Ka01ki"
};

var invokesites = function(obj: { site1:string, site2 :string, site3:string }) { 
    console.log("site1 :"+obj.site1) 
    console.log("site2 :"+obj.site2) 
    console.log("site3 :"+obj.site3)
} 
invokesites(sites)

interface IPoint { 
    x:number 
    y:number 
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
} 
 
var newPoint = addPoints({x:3,y:4},{x:5,y:1})
console.log(newPoint)