import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container className="mt-4">
      <h4>Product Quantity</h4>
      <Row className="align-items-center">
        <Col md={2}>
          <Button variant="danger" onClick={decrease}>-</Button>
        </Col>

        <Col md={2}>
          <Form.Control
            type="number"
            value={quantity}
            readOnly
          />
        </Col>

        <Col md={2}>
          <Button variant="success" onClick={increase}>+</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductQuantity;
