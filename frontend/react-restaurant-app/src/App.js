import { useState, useEffect } from "react";
import MenuList from "./components/MenuList";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import ImageCarousel from "./components/ImageCarousel";
import Order from "./components/Order";
import Cookies from "js-cookie";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [customerName, setCustomerName] = useState([]);

  const customer = () => {
    setCustomerName([...customerName]);
  };

  const addToCart = (menuItem) => {
    setOrder([...order, menuItem]);
  };
  const removeItem = (index) => {
    order.splice(index, 1);
    setOrder([...order]);
  };
  const clearCart = () => {
    setOrder([]);
    localStorage.removeItem("order");
  };
  //everytime order changes it recalculates
  useEffect(() => {
    let newSubTotal = 0;
    for (let i = 0; i < order.length; i++) {
      newSubTotal += parseFloat(order[i].price); //use parseFloat bc django brings in decimal field as a string
    }
    setSubTotal(newSubTotal);
    console.log(newSubTotal);
  }, [order]);

  //useEffect to get menuItems and then use response data and call setMenuItems(data);
  useEffect(() => {
    const getmenuItems = async () => {
      const response = await fetch("/api_v1/items/");

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      //method to set menu items
      setMenuItems(data);
    };
    //call getmenuItems
    getmenuItems();
  }, []);

  const submitOrder = async (customerName) => {
    const newOrder = {
      customer_name: customerName,
      sub_total: subTotal,
      items: order,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(newOrder),
    };

    const response = await fetch("/api_v1/orders/", options);
    if (!response.ok) {
      throw new Error("Network response not ok.");
    }
    const data = await response.json();
    // console.log({ data });
    setOrder([...order, data]);
  };

  if (!order) {
    return <div>Fetching data ...</div>;
  }
  return (
    //react bootstrap navbar, carousel, and menu list
    <div className="App">
      <Navbar className="navbar" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://static.spotapps.co/website_images/ab_websites/105011_website/logo_scroll.png"
              width="65"
              height="65"
              className="d-inline-block align-top"
              alt="Farm Fresh Fast logo"
            />
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ImageCarousel />
      <div className="Menu-Cart-Container">
        <div className="Menu-List" id="menu">
          <MenuList addToCart={addToCart} menuItems={menuItems} />
          {/* added menuItems here to pass to Menu List component */}
        </div>
        <div className="Cart-Aside">
          <Order
            order={order}
            subTotal={subTotal}
            removeItem={removeItem}
            clearCart={clearCart}
            submitOrder={submitOrder}
            customer={customer}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
