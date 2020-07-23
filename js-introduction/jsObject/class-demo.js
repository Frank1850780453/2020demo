class Student {
    constructor(name,number){
        this.name = name
        this.number = number
    }
    sayHi() {
        console.log(
            `姓名 ${this.name},学号 ${this.number}`
        )
    }
}

//通过类声明对象/实例
const stu = new Student('张三',100)
console.log(stu.name);
console.log(stu.number)
stu.sayHi()

const stu2  = new Student('李四',101)
console.log(stu2.name);
console.log(stu2.number)
stu2.sayHi()


