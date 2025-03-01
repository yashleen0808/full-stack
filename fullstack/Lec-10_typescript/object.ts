interface User{
    username:string,
    age:number
}
let user:User={
    username:"Yashleen",
    age:20
}
console.log(user.username)
user.age=45;

let num:number[]=[1,2,]
num[3]=45;

let word :string[]=["yashleen"];

let numstr:number[] | string[] =[];
numstr[0]=1;
numstr[1]="10";
//console.log(numstr[0]);

interface Emp{
    id:number,
    ename:string,
    salary: number,
    dep: string,
    getName(): string;
    getSalary(): number;
    getDep(): string;
}
interface Emp2{
    id:number,
    ename:string,
    salary: number,
    dep: string,
    getSalary(): number;
    
}
let emp2: Emp2={
    id: 2,
    ename: "Kashish",
    salary: 90000,
    dep: "IT",
    getSalary() {
        return this.salary; 
    },

}
let emp3: Emp = {
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
}
let emp: Emp = {
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

function empname(em:Emp){
    return em.getName
}
//empname(emp)

//array of object

let employee:Emp[]=[emp,emp3]

interface User1 {
    id: number;
    name: string;
    password: string;
    email: string;
}

let users: User1[] = [
    { id: 1, name: "Kashish", password: "1234", email: "kashish@gmail.com" },
    { id: 2, name: "Robin", password: "robin789", email: "robin@gmail.com" }
];
console.log(users);


// OR | = ya to aap poora string daalo ya number daalo poora
let some:number | string;
let arr2:number[] | string[]=[1,"3"]
let arr3:(number|string)[]=[1,"343"]