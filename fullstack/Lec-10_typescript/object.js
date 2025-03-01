"use strict";
let user = {
    username: "Yashleen",
    age: 20
};
console.log(user.username);
user.age = 45;
let num = [1, 2,];
num[3] = 45;
let word = ["yashleen"];
let numstr = [];
numstr[0] = 1;
numstr[1] = "10";
let emp2 = {
    id: 2,
    ename: "Kashish",
    salary: 90000,
    dep: "IT",
    getSalary() {
        return this.salary;
    },
};
let emp3 = {
    id: 3,
    ename: "Robin",
    salary: 70000,
    dep: "IT",
    getName() {
        return this.ename;
    },
    getSalary() {
        return this.salary;
    },
    getDep() {
        return this.dep;
    }
};
let emp = {
    id: 1,
    ename: "Yashleen",
    salary: 50000,
    dep: "IT",
    getName() {
        return this.ename;
    },
    getSalary() {
        return this.salary;
    },
    getDep() {
        return this.dep;
    }
};
console.log(emp.getName());
// console.log(emp.getSalary());
console.log(emp.getDep());
function empname(em) {
    return em.getName;
}
//empname(emp)
//array of object
let employee = [emp, emp3];
let users = [
    { id: 1, name: "Kashish", password: "1234", email: "kashish@gmail.com" },
    { id: 2, name: "Robin", password: "robin789", email: "robin@gmail.com" }
];
console.log(users);
