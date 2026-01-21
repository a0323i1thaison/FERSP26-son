// tạo một student in ra bằng card bootstrap
const students = [
    {id: 1, name: "Alice", age: 20, grade: "A",avatar :"/images/image1.png"},
]
// in ra bằng mẫu card dưới 
import Card from 'react-bootstrap/Card';
return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );