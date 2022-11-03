import { useState } from 'react';
import './App.css';

function App() {

  const productsArray = ["Shirt", "Pants", "Tie", "Jacket", "Hat", "Scarf"];
  const productItems = productsArray.map((item, i) => <option key={i} value={item}>{item}</option>);
  const [cart, setCart] = useState({})
  const [item, setItem] = useState("Shirt");
  const cartDisplay = Object.entries(cart).map(([key, value]) => (<li key={key}>{key} X {value}</li>))


  function addToCartHandler(e){
    if (item in cart){
      setCart(cart=> ({...cart ,[item]: cart[item] + 1 }))
      console.log(cart[item])
    }
    else{
      setCart(cart => ({...cart, [item]: 1}))
    }
  }
  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
        <form>
        <label for="products">Choose a Product: </label>
        <select onChange={e => {setItem(e.target.value);}} name="products" id="products">{productItems}</select>
        <button onClick={e =>{addToCartHandler(e)}} className="addToCart" type="button">Add To Cart</button>
        
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
