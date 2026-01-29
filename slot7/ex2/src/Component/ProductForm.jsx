import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });
  return (
    <Container className="mt-4">
      <h3>Exercise 3: Product Form</h3>

      <Form>
        <Form.Group>
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Giá</Form.Label>
          <Form.Control
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Danh mục</Form.Label>
          <Form.Control
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
        </Form.Group>

        <Button className="mt-3">Submit</Button>
      </Form>
    </Container>
  );
}

export default ProductForm;