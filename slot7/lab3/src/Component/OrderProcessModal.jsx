import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function OrderProcessModal() {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleConfirm = () => {
    alert("Xử lý đơn hàng thành công!");
    setIsShowModal(false);
  };

  return (
    <div className="mt-4">
      <Button variant="primary" onClick={() => setIsShowModal(true)}>
        Xử lý đơn hàng
      </Button>

      <Modal
        show={isShowModal}
        onHide={() => setIsShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý đơn hàng</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsShowModal(false)}>
            Hủy
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderProcessModal;
