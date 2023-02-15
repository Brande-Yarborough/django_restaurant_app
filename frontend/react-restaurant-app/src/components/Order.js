import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Order({ order, subTotal, removeItem, clearCart }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const orderHTML = order.map((item, index) => (
    <div key={index}>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>${item.price}</Card.Text>
      <Button
        onClick={() => {
          removeItem(index);
        }}
        className="remove-item"
        variant="primary"
      >
        Remove Item
      </Button>
    </div>
  ));

  const handleSubmitOrder = () => {
    localStorage.setItem("order", JSON.stringify(order));
    setShow(true);
  };

  const handleCompleteOrder = () => {
    clearCart();
    setShow(false);
    alert("Thank you for your order!");
  };

  return (
    <>
      <Card className="cart-aside">
        <Card.Header>Cart</Card.Header>
        <Card.Body>
          {orderHTML}
          <div>Total:${subTotal}</div>

          <Button
            onClick={handleSubmitOrder}
            className="submit-order"
            variant="primary"
          >
            Submit Order
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {orderHTML}
          <div>Total:${subTotal}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCompleteOrder}>
            Complete Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Order;
