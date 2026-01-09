const x = 15; 
console.log(`The value of x is: ${x}`);
if (x > 10) {
  console.log("x is greater than 10");
}else { 
    console.log("x is 10 or less");
}
// dùng toán tử 3 ngôi
const result = (x > 10) ? "x is greater than 10" : "x is 10 or less";
console.log(result);
const greet=(name,age=18) => {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
// hàm bình phương 
const square = (n) => n * n;
console.log(`The square of 5 is: ${square(5)}`);
// in thông tin học sinh
const studentInfo = (name , age, grade) => {
    console.log(`Student Name: ${name}, Age: ${age}, Grade: ${grade}`);
}
studentInfo("Alice", 20, "A");
// khai báo mảng student  name , age, grade
const students = [
    {name: "Alice", age: 20, grade: "A"},
    {name: "Bob", age: 22, grade: "B"},
    {name: "Charlie", age: 19, grade: "C"}
];
students.forEach(student => {
    studentInfo(student.name, student.age, student.grade);
});
// sử dụng destructuring để lấy giá trị từ mảng
students.forEach(({name, age, grade}) => {
    studentInfo(name, age, grade);
});
// sử dụng map in ra giá trị mảng student
const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);
// rest parameter cho mảng students lấy phần còn lại của mảng
const [firstStudent, secondStudent, ...otherStudents] = students;
console.log("First Student:", firstStudent);
console.log("Second Student:", secondStudent);
console.log("Other Students:", otherStudents);
otherStudents.forEach(student => {
    studentInfo(student.name, student.age, student.grade);
});
// thêm mới student vào mảng sử dụng spread operator
const newStudent = {name: "David", age: 21, grade: "A"};
const updatedStudents = [...students, newStudent];
console.log("Updated Students:");
updatedStudents.forEach(student => {
    studentInfo(student.name, student.age, student.grade);
});