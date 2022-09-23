import React, { useState } from "react";
import Item from "../../components/Item/Item";
import Navbar from "../../components/Navbar/Navbar";
import { ROLLS } from "./items";

export function Roll(type, price, glazing, packSize) {
    this.type = type;
    this.price = price;
    this.glazing = glazing;
    this.packSize = packSize
  }

const Home = () => {
    const [cartItems, setCartItems] = useState([])
    const [newItem, setNewItem] = useState()

    const addToCart = (item) => {
        const detailedItem = new Roll(item.type, item.price, item.glazing, item.packSize)
        setCartItems([...cartItems, detailedItem])
        setNewItem(detailedItem)
        setTimeout(() => {
            setNewItem(null)
        }, 3000)
    }

  return (
    <React.Fragment>
      <Navbar cartItems={cartItems} newItem={newItem}/>
      <section className="menuList">
        {ROLLS.map(({type, price, image}) => <Item type={type} price={price} image={image} addToCart={addToCart} />)}
      </section>
    </React.Fragment>
  );
};

export default Home;
