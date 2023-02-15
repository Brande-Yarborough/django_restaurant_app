import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import MenuList from "./MenuList";
import Order from "./Order";
import { nanoid } from "nanoid";

function MenuItem({ name, price, description, addToCart }) {
  const handleAddToCart = (event) => {
    event.preventDefault();

    const menuItem = {
      name,
      price,
    };

    addToCart(menuItem);
  };

  return (
    <div className="menu-item">
      <Card className="menu-card" style={{ width: "45rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title className="item-name">{name}</Card.Title>
          <Card.Title className="price">${price}</Card.Title>
          <Card.Text className="item-description">{description}</Card.Text>
          <Button
            className="cart-button"
            type="button"
            variant="primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MenuItem;
