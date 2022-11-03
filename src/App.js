import { useState } from 'react';
import './App.css';

function App() {

  const productsArray = ["Shirt", "Pants", "Tie", "Jacket", "Hat", "Scarf"];
  const productItems = productsArray.map((item, i) => <option key={i} value={item}>{item}</option>);
  const [cart, setCart] = useState([])
  const cartDisplay = cart.map((item, i) => <li key={i}>{item}</li>);
  const [item, setItem] = useState("Shirt");




  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
        <form>
        <label for="products">Choose a Product: </label>
        <select onChange={e => {setItem(e.target.value);}} name="products" id="products">{productItems}</select>
        <button onClick={(event) =>{setCart([item].concat(cart))}} className="addToCart" type="button">Add To Cart</button>
        <button onClick={(event) =>{console.log(cart)}} className="addToCart" type="button">Add To Cart</button>
      </form>
      <div>
        <ul>
          {cartDisplay}
        </ul>
      </div>
      </header>
    </div>
  );
};

export default App;
