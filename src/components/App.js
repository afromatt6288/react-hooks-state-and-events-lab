import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const appClass = isDarkMode ? "App dark" : "App light"

  function toggleMode(){
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
