import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [ items, setItems ] = useState( itemData );
  const [ darkModeOn, setDarkModeStatus ] = useState( false );

  function toggleDarkMode() { setDarkModeStatus( darkModeOn => !darkModeOn ) }

  // this data will be passed down to the ShoppingList as a prop
  console.log( items );

  return (
    <div className={ "App " + ( darkModeOn ? "dark" : "light" ) }>
      <header>
        <h2>Shopster</h2>
        <button onClick={ toggleDarkMode } >Switch to { darkModeOn ? "Light" : "Dark" } Mode</button>
      </header>
      <ShoppingList items={ items } />
    </div>
  );
}

export default App;
