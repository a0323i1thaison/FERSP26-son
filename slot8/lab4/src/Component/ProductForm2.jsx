import React, { useReducer } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

// Initial State
const initialState = {
  name: "",
  price: "",
  category: "",
  isSubmitted: false
};

// Reducer
function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.field]: action.value
      };

    case "RESET_FORM":
      return initialState;

    case "SUBMIT":
      return {
        ...state,
        isSubmitted: true
      };

    default:
      return state;
  }
}

function ProductForm2() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };

  // VALIDATION
  const isNameValid = state.name.length >= 6;
  const isPriceValid = Number(state.price) > 1000;
  const isCategoryValid = state.category !== "";

  const isFormValid = isNameValid && isPriceValid && isCategoryValid;

  return (
    <Container className="mt-4">
      <h3>Exercise 3: Product Form</h3>

      {/* ✅ Thông báo submit thành công */}
      {state.isSubmitted && isFormValid && (
        <Alert variant="success">
          ✅ Submit thành công! Sản phẩm đã được thêm.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        {/* Tên sản phẩm */}
        <Form.Group className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control
            value={state.name}
            isValid={state.isSubmitted && isNameValid}
            isInvalid={state.isSubmitted && !isNameValid}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_INPUT",
                field: "name",
                value: e.target.value
              })
            }
          />
          <Form.Control.Feedback type="valid">
            ✔ Tên sản phẩm hợp lệ
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Tên sản phẩm phải từ 6 ký tự trở lên
          </Form.Control.Feedback>
        </Form.Group>

        {/* Giá */}
        <Form.Group className="mb-3">
          <Form.Label>Giá</Form.Label>
          <Form.Control
            type="number"
            value={state.price}
            isValid={state.isSubmitted && isPriceValid}
            isInvalid={state.isSubmitted && !isPriceValid}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_INPUT",
                field: "price",
                value: e.target.value
              })
            }
          />
          <Form.Control.Feedback type="valid">
            ✔ Giá hợp lệ
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Giá phải lớn hơn 1000
          </Form.Control.Feedback>
        </Form.Group>

        {/* Danh mục */}
        <Form.Group className="mb-3">
          <Form.Label>Danh mục</Form.Label>
          <Form.Select
            value={state.category}
            isValid={state.isSubmitted && isCategoryValid}
            isInvalid={state.isSubmitted && !isCategoryValid}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_INPUT",
                field: "category",
                value: e.target.value
              })
            }
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="Điện tử">Điện tử</option>
            <option value="Thời trang">Thời trang</option>
            <option value="Gia dụng">Gia dụng</option>
          </Form.Select>
          <Form.Control.Feedback type="valid">
            ✔ Danh mục hợp lệ
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Vui lòng chọn danh mục
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Button
          variant="secondary"
          className="ms-2"
          onClick={() => dispatch({ type: "RESET_FORM" })}
        >
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default ProductForm2;
