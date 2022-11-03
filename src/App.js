import { useState } from "react";
import './App.css';

function App() {

  const productsArray = ["Shirt", "Pants", "Tie", "Jacket", "Hat", "Scarf"];
  const productItems = productsArray.map((item, i) => <option key={i} value={item}>{item}</option>);
  const selectedItem = "";
  
  const [item, setItem] = useState("");




  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
        <form>
        <label for="products">Choose a Product: </label>
        <select onChange={e => {setItem = (e.target.value);}} name="products" id="products">{productItems}</select>
        <button onClick={(event) =>{console.log(item)}} className="addToCart" type="button">Add To Cart</button>
      </form>
      <div>
        <p>Test</p>
      </div>
      </header>
    </div>
  );
};

export default App;
