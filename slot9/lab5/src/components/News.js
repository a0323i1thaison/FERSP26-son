import { Container, Row, Col, Card } from "react-bootstrap";
import newLists from "../data/newsData";

function News() {
  return (
    <Container>
      <h2 className="text-danger mb-4">News Category</h2>
      <Row>
        {newLists.map(item => (
          <Col md={3} key={item.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.images} style={{ height: '180px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="fs-6">{item.title}</Card.Title>
                <Card.Text className="text-muted small">{item.description}</Card.Text>
                <a href="#" className="small text-decoration-underline">{item.title}</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default News;