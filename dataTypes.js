//"any number called integer in JS";
const integer_ = 9;
//"Characters or texe or any thing between "" and '' or `` ";
const string_ = "G";
//"a group of any data type in []"
const array_ = ["G", "great", 99, true];
//"contain key and value in {}"
const object_ = { firstName: "Ghadier", lastName: "Alenezi", age: 27 };

console.log(`int:${integer_}, str: ${string_},arr:${array_} , obj:${object_}`);

//I expect it to be array
console.log(typeof(array_));
// oops the output is object

let f = null;
let s = undefined;
console.log(typeof(s));
