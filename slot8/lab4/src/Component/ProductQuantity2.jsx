import React, { useReducer } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const initialState = {
  count: 0,
};

function quantityReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: Math.max(0, state.count - 1) };

    case "SET_INPUT":
      return {
        count: action.payload < 0 ? 0 : action.payload,
      };

    default:
      return state;
  }
}

function ProductQuantity2() {
  const [state, dispatch] = useReducer(quantityReducer, initialState);

  return (
    <Container className="mt-4">
      <h4>Product Quantity</h4>

      <Row className="align-items-center">
        <Col md={2}>
          <Button
            variant="danger"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            -
          </Button>
        </Col>

        <Col md={2}>
          <Form.Control
            type="number"
            value={state.count}
            onChange={(e) =>
              dispatch({
                type: "SET_INPUT",
                payload: Number(e.target.value),
              })
            }
          />
        </Col>

        <Col md={2}>
          <Button
            variant="success"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            +
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductQuantity2;
