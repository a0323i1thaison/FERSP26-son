const student = { id : 1, name: "Alice", age: 20, grade: "A" , avata :"ex1/public/images/image.png "};
// in ra bằng các thẻ
const About = () => {
    return (
        <div>
            <h2>Student Information</h2>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <img src={student.avata} alt="Student Avata" width="200"/>
        </div>
    );
    };

export default About;