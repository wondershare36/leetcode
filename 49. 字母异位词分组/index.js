var groupAnagrams = function (strs) {
  const map = new Map();
  // 遍历数组
  for (let str of strs) {
    // 将字符串拆分成数组
    let strArray = Array.from(str);
    // 将数组按照字典序排列
    strArray.sort();
    // 将字符数组转化成字符串，得到唯一的 字典序key
    let key = strArray.toString()
    // 建立一个values集合,map集合中有该key的value,就是map中的 values,否则是空数组
    let values = map.get(key) ? map.get(key) : new Array();
    // 将新的异位词加进该key下的values
    values.push(str);
    // 更新map集合中的key:values
    map.set(key, values)
  }
  return Array.from(map.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));