const person1 = {
    name: 'john',
    age: 30
}
const person2 = {
    name: 'jane',
    age: 30
}

// 생성자
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person4 = new Person("alice", 35);

const lastDay = new Date("2024-12-31")