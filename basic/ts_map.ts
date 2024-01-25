let nameSiteMapping = new Map();
 
// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("kaoiki", 2);
nameSiteMapping.set("Taobao", 3);
 
// 获取键对应的值
console.log(nameSiteMapping.get("kaoiki"));     // 2
 
// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao"));       // true
console.log(nameSiteMapping.has("Zhihu"));        // false
 
// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size);                // 3
 
// 删除 
console.log(nameSiteMapping.delete("Google"));    // true
console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对


for(let key of nameSiteMapping.keys()){
    console.log("key is " + key)
}



nameSiteMapping.clear();             // 清除 Map
console.log(nameSiteMapping);