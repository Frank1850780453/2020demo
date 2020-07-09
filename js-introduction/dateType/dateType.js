//javeSrcipt具有弱类型特性
var a = 32;
document.write(a + 32+'<br/>')//64
document.write(a + '32'+'<br/>') //3232
document.write(a - '32'+'<br/>') //0

//数据类型
/*基本值类型：
undefined：let a ;（用const定义undefined会报错)
Boolean：let b = true;
String：let c = "xxx";
number：let d = 1;	
symbol(ES6中新的原始数据类型，表示独一无二的值)：let sym = Symbol('sym');
*/

/*引用数据类型：
对象(Object)：let obj = {obj1:1}
数组(Array):：let array = ['1','2']
（特殊引用数据类型）
空(null)：let field = null （指向一个空的地址值）
函数(function): function fun() {}
*/




//隐式转换
// + -
var x = 'This answer is ' + 42  //This answer is 42
var y = 42 + ' is the answer '
var z = '37' -7  // 30
var zz = '37' + 7 //377
// == ===
// 1.23 == '1.23'  true
// 0 == false  true
// null == undefined true
// new Object() == new Object()  false
// [1,2] == [1,2] false
// document.write(new Object('hi') == 'hi') //true

//==
//类型相同，同 ===
//类型不同
//null == undefined true
//number == string转number 1 == '1' true
//boolean == ?转number 1 == true true
// object == number | string 尝试对象转化基本类型  new Object('hi') == 'hi' true 
//其他fasle




//包装对象
//在js中以对象的形式去访问string，number，boolen，会生成一个临时的对象，在访问结束后销毁
var a = 'string';
document.write(a.length+'<br/>') //6
a.t = 10;
document.write(a.t+'<br/>')//undefined




//类型检测
//type of,instanceof,Object.prototype.toString,constructor,duck type

//type of
var type1 = typeof 1; //number
var type2 = typeof 'a'; //string
var type3 = typeof function(){} //function
document.write(type3+'<br/>')
var type4 = typeof(undefined) //undefined
var type5 = typeof new Object() //object
var type6 = typeof [1,2] //object
var type7 = typeof NAN //number
var type8 = typeof null //object 历史原因typeof null === 'object'是因为返回null会导致大部分浏览器不能访问

//instanceof 判断对象类型（基于原型链），判断左操作数对象的原型链上是否右边操作对象的构造函数的prototype属性
var instance1 = [1,2] instanceof Array  //true
var instance2 = new Object() instanceof Array //false
//tips:不同的window或者iframe间的对象类型检测不能使用instanceof

//Object.prototype.toString
var opt1 = Object.prototype.toString.apply([]); //[object Array]
document.write(opt1+'<br/>')
var opt2 = Object.prototype.toString.apply(function(){});//[object Function]
var opt2 = Object.prototype.toString.apply(null);//[object Null] ie6/7/8 返还[object object]
var opt2 = Object.prototype.toString.apply(undefined)//[object Undefined];

