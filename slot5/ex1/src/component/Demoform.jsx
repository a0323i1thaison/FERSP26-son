import { Form, Button, Container, Row, Col, Card, InputGroup } from 'react-bootstrap';

function DemoForm() {
  return (
    <Container 
      fluid 
      className="d-flex align-items-center justify-content-center min-vh-100" 
      style={{ 
        background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)', 
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0" style={{ borderRadius: '20px', overflow: 'hidden', backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.95)' }}>
            
            {/* Header với gradient xanh dương và icon */}
            <Card.Header
              className="text-center text-white py-4"
              style={{ 
                background: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)', 
                border: 'none',
                position: 'relative'
              }}
            >
              <div className="d-flex justify-content-center align-items-center">
                <span className="fs-1 me-3">✈️</span>
                <h3 className="mb-0 fw-bold">Đặt Vé Máy Bay</h3>
              </div>
              <button 
                type="button" 
                className="btn-close btn-close-white position-absolute top-50 end-0 translate-middle-y me-3" 
                aria-label="Close"
              ></button>
            </Card.Header>

            <Card.Body className="p-5">
              <Form>

                {/* Họ tên */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-dark fs-6">👤 Họ tên</Form.Label>
                  <InputGroup className="shadow-sm">
                    <InputGroup.Text className="bg-primary text-white border-0">
                      <i className="bi bi-person-fill"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Ví dụ: NGUYEN VAN A"
                      className="form-control-lg border-0"
                      style={{ background: 'rgba(255, 255, 255, 0.8)' }}
                    />
                  </InputGroup>
                  <Form.Text className="text-muted small">
                    • Phải nhập ít nhất 5 ký tự<br />• Viết in hoa
                  </Form.Text>
                </Form.Group>

                {/* Địa chỉ */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-dark fs-6">🏠 Địa chỉ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ví dụ: 123 DUONG ABC, HA NOI"
                    className="form-control-lg shadow-sm border-0"
                    style={{ background: 'rgba(255, 255, 255, 0.8)' }}
                  />
                  <Form.Text className="text-muted small">
                    • Phải nhập ít nhất 5 ký tự<br />• Viết in hoa
                  </Form.Text>
                </Form.Group>

                {/* Đi từ - Đến */}
                <Row className="mb-4">
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-bold text-dark fs-6">🛫 Đi từ</Form.Label>
                      <Form.Select 
                        className="form-select-lg shadow-sm border-0" 
                        style={{ background: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        <option>Chọn điểm khởi hành</option>
                        <option>Hà Nội (HAN)</option>
                        <option>Đà Nẵng (DAD)</option>
                        <option>TP.HCM (SGN)</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-bold text-dark fs-6">🛬 Đến</Form.Label>
                      <Form.Select 
                        className="form-select-lg shadow-sm border-0" 
                        style={{ background: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        <option>Chọn điểm đến</option>
                        <option>Hà Nội (HAN)</option>
                        <option>Đà Nẵng (DAD)</option>
                        <option>TP.HCM (SGN)</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Checkbox */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-dark fs-6">🔄 Chọn chiều đi</Form.Label>
                  <div className="d-flex gap-4 justify-content-center">
                    <Form.Check 
                      type="checkbox" 
                      label={<span className="fw-semibold">🚀 Chiều đi</span>} 
                      className="fs-6" 
                      style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '10px', border: '1px solid #ddd' }}
                    />
                    <Form.Check 
                      type="checkbox" 
                      label={<span className="fw-semibold">🔙 Khứ hồi</span>} 
                      className="fs-6" 
                      style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '10px', border: '1px solid #ddd' }}
                    />
                  </div>
                </Form.Group>

                {/* Button */}
                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="py-3 fw-bold fs-5 shadow-lg" 
                    style={{ 
                      borderRadius: '15px', 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    🎫 Đặt Vé Ngay! 
                  </Button>
                </div>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DemoForm;
