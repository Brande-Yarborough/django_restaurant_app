import React, { useState } from "react";
import { nanoid } from "nanoid";
import MenuItem from "./MenuItem";
import Nav from "react-bootstrap/Nav";

const INITIAL_MENU_ITEMS = [
  {
    id: 1,
    name: "Almost Heaven Burger",
    description:
      "Locally sourced beef, cheese, tomato, onion, lettuce, and pickles on a toasted brioche bun. | 915 cal",
    price: 12.99,
    category: "Farm To Hands",
  },
  {
    id: 2,
    name: "Toasted Chicken Bacon Ranch Wrap",
    description:
      "Hormone-free chicken, turkey bacon, farmhouse blended cheese, onions, and greens in a spinach wrap, toasted. | Choice of side. | 555 cal",
    price: 12.99,
    category: "Farm To Hands",
  },
  {
    id: 3,
    name: "Buffalo Chicken Quesadilla",
    description:
      "Hormone-free chicken, buffalo sauce, onions, bleu cheese, and blended cheese, grilled in a spinach wrap. | 490 cal",
    price: 11.99,
    category: "Farm To Hands",
  },
  {
    id: 4,
    name: "Seasonal Stir Fry",
    description:
      "Brown rice, squash/zucchini, peppers, onions, and house-made stir fry sauce. | 455 cal",
    price: 10.99,
    category: "Farm Favorites",
  },
  {
    id: 5,
    name: "Farmhouse Skillet",
    description:
      "Sauteed onions, peppers, collard greens, sweet potatoes, and mushrooms, topped with hormone-free chicken and an over-easy chicken egg*. | 450 cal",
    price: 14.99,
    category: "Farm Favorites",
  },
  {
    id: 6,
    name: "Coal Miner's Daughter Seared Meatloaf",
    description:
      "Locally sourced grass-fed beef. Onions and peppers, topped with house-made mountaineer sauce. | Choice of two sides. | 645 cal",
    price: 15.99,
    category: "Farm Favorites",
  },
  {
    id: 7,
    name: "Farmhouse Salad - GF",
    description:
      "Field greens, cucumbers, seasonal veggies, and blended cheese, tossed. | House dressing on the side. | 180 cal",
    price: 9.99,
    category: "Salads",
  },
  {
    id: 8,
    name: "Seasonal Cobb Salad - GF",
    description:
      "Mixed greens, cucumbers, micro greens, blended cheese, fried egg, and turkey bacon. | House dressing on the side. | 315 cal",
    price: 11.99,
    category: "Salads",
  },
  {
    id: 9,
    name: "Apple Harvest Salad - GF",
    description:
      "Mixed greens, cucumbers, carrots, onion, sliced apples, and feta cheese, topped with chicken. | House dressing on the side. | 525 cal",
    price: 13.99,
    category: "Salads",
  },
  {
    id: 10,
    name: "Vegan Chicken Bacon Ranch Wrap",
    description:
      "Gardein no-kill vegan chicken, sweet potato bacon, onions, and vegan cheese in a spinach wrap, toasted. | Served with house-made vegan ranch on the side.",
    price: 13.99,
    category: "No-Kill Menu",
  },
  {
    id: 11,
    name: "Vegan Buffalo Chicken Wrap",
    description:
      "Gardein no-kill vegan chicken tossed in buffalosauce, vegan cheese, cucumbers, and mixed greens in a spinach wrap, toasted. | Served with house-made vegan ranch on the side.",
    price: 13.99,
    category: "No-Kill Menu",
  },
  {
    id: 12,
    name: "Backyard Bacon Cheeseburger",
    description:
      "Beyond meat beef, tempeh bacon, vegan cheese, topped with lettuce, green tomato, pickles, onion",
    price: 14.99,
    category: "No-Kill Menu",
  },
];

function MenuList({ addToCart, menuItems }) {
  // const [menuItems, setMenuItems] = useState(INITIAL_MENU_ITEMS);
  const [filter, setFilter] = useState("Farm to Hands");
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");

  // const innerHTML = INITIAL_MENU_ITEMS.map((x) => (
  //   <div key={x.id}>
  //   <div>{x.name}</div>
  //   <div>{x.description}</div>
  //   <div>{x.price}</div>
  // </div>

  // )
  // )

  const menuItemsHTML = menuItems
    .filter(
      (menuItem) => menuItem.category.toLowerCase() === filter.toLowerCase()
    )
    .map((menuItem) => (
      <MenuItem
        key={menuItem.id}
        name={menuItem.name}
        description={menuItem.description}
        price={menuItem.price}
        addToCart={addToCart}
      />
    ));

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link
            key="Farm to Hands"
            onClick={() => setFilter("Farm to Hands")}
            href="#first"
          >
            Farm to Hands
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            key="Farm Favorites"
            onClick={() => setFilter("Farm Favorites")}
            href="#favorites"
          >
            Farm Favorites
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            key="Salads"
            onClick={() => setFilter("Salads")}
            href="#salads"
          >
            Salads
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            key="No-Kill Menu"
            onClick={() => setFilter("No-Kill Menu")}
            href="#no-kill"
          >
            No-Kill Menu
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>{menuItemsHTML}</div>
    </>
  );
}

export default MenuList;
