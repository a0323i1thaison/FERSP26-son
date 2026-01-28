import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function TestUseState() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (username !== "" && age !== "") {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h2>Test useState Hook</h2>

      <Container>
        {/* Username */}
        <Row className="mb-3">
          <Col md={2}>
            <label className="form-label">Username:</label>
          </Col>
          <Col md={4}>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </Row>

        {/* Age */}
        <Row className="mb-3">
          <Col md={2}>
            <label className="form-label">Age:</label>
          </Col>
          <Col md={4}>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
        </Row>

        {/* Button */}
        <Row className="mb-3">
          <Col md={6}>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Col>
        </Row>

        {/* Result – chỉ hiện khi đã submit và có dữ liệu */}
        {submitted && (
          <Row className="mb-3">
            <Col md={6}>
              <label className="form-label">
                Hello, {username}. You are {age} years old.
              </label>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default TestUseState;
