import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Order({ order, subTotal, removeItem, clearCart, submitOrder }) {
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
    submitOrder("coker");
  };

  return (
    <>
      <Card className="cart-aside">
        <Card.Header>Cart</Card.Header>
        <Card.Body>
          {orderHTML}
          <div>Subtotal:${subTotal}</div>

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
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="FirstName LastName"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Order Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Please enter any notes or customizations"
              />
            </Form.Group>
          </Form>
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
