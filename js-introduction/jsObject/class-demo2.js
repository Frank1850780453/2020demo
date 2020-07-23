//继承
//extends,super(执行父类构造函数)，扩展或者重写方法
//父类
class People{
    constructor(name){
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

//子类
class Student extends People {
    constructor(name,number){
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(
            `姓名 ${this.name},学号 ${this.number}`
        )
    }
}
//子类
class Teacher extends People {
    constructor(name,major){
        super(name)
        this.major = major
    }
    teach() {
        console.log(
            `姓名 ${this.name}教 ${this.major}`
        )
    }
}

//实例
const stu = new Student('张三',100)
console.log(stu.name);
console.log(stu.number)
stu.sayHi()
stu.eat()

//实例
const tea = new Teacher('王','语文')
console.log(tea.name);
console.log(tea.major)
tea.teach()
tea.eat()