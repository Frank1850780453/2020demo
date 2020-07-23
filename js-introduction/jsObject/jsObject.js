//对象的概述：对象中包含一系列属性，这些属性是无序的，每个属性都有一个字符串key和对应的value
function foo(){} //默认带prototype
foo.prototype.z = 3
var obj = new foo()
document.write(obj.__proto__.z+'<br/>') //3   obj.__proto__.z === foo.prototype.z true





//读写对象的属性
// var obj = {x:1,y:2}
// obj.x;//1
// obj['y'];//2

//属性读写异常
var obj = {x:1}
obj.y//undefiend
var yz = obj.y.z //Cannot read property 'z' of undefined
obj.y.z = 2;//Cannot set property 'z' of undefined

//属性删除
var person = {age:1,name:'a'}
delete person.age; //true
delete person['name'];//true
person.age;//undefined
delete person.age //true

delete Object.prototype; //false
var descriptor = Object.getOwnPropertyDescriptor(Object,'prototype');//返回指定对象上一个自有属性对应的属性描述符
descriptor.configurable//true
//全局变量，局部变量，函数声明不能被删除
//隐式定义可以被删除

//属性检测
var cat = new Object
cat.legs = 4
cat.name = 'a';

'legs' in cat; //true in会沿着原型链网上查找
'abc' in cat; //false
'toString' in cat;//true

cat.hasOwnProperty('legs') //true
cat.hasOwnProperty('toString');//false

//枚举的方法
cat.propertyIsEnumerable('legs');//true
cat.propertyIsEnumerable('toString')//false


//原型&原型链