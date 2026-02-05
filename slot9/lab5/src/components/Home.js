import { Container, Carousel, Row, Col } from "react-bootstrap";

function Home() {
  const thumbs = [1, 2, 3, 4, 5, 6];
  return (
    <Container className="mt-2">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="images/banner-1.jpg" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="images/banner-2.jpg" alt="Slide 2" />
        </Carousel.Item>
      </Carousel>
      <Row className="mt-4 text-center">
        {thumbs.map(t => (
          <Col key={t} xs={2}>
            <img src={`images/thumb-${t}.jpg`} className="rounded-circle border" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
          </Col>
        ))}
      </Row>
      <h3 className="text-danger mt-3 fw-bold">This is Home Page</h3>
    </Container>
  );
}
export default Home;