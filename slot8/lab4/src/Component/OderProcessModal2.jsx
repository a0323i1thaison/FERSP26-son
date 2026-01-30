import React, { useReducer } from "react";
import { Button, Modal } from "react-bootstrap";

// 1. Initial State
const initialState = {
  isShowModal: false,
  isConfirmed: false,
};

// 2. Reducer
function orderReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isShowModal: true,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isShowModal: false,
      };

    case "CONFIRM_ORDER":
      return {
        ...state,
        isConfirmed: true,
        isShowModal: false, // tự động đóng Modal
      };

    default:
      return state;
  }
}

function OrderProcessModal2() {
  // 3. useReducer
  const [state, dispatch] = useReducer(orderReducer, initialState);

  // 4. Confirm handler
  const handleConfirm = () => {
    dispatch({ type: "CONFIRM_ORDER" });
    alert("Xử lý đơn hàng thành công!");
  };

  return (
    <div className="mt-4">
      <Button
        variant="primary"
        onClick={() => dispatch({ type: "OPEN_MODAL" })}
      >
        Xử lý đơn hàng
      </Button>

      <Modal
        show={state.isShowModal}
        onHide={() => dispatch({ type: "CLOSE_MODAL" })}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý đơn hàng</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            Hủy
          </Button>

          <Button
            variant="success"
            onClick={handleConfirm}
          >
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderProcessModal2;
