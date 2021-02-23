import React, { useState } from "react";

function Item({ name, category }) {

  const [ inCart, toggleCartStatus ] = useState( false );

  function addToOrRemoveFromCart() { toggleCartStatus( inCart => !inCart ); }

  return (
    <li className={ inCart ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={ addToOrRemoveFromCart }>Add to Cart</button>
    </li>
  );
}

export default Item;
