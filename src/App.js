import { useState } from 'react';
import './App.css';

function App() {


  

  const productsArray = ["Shirt", "Pants", "Tie", "Jacket", "Hat", "Scarf"];
  const [item, setItem] = useState(productsArray[0]);
  const productItems = productsArray.map((item, i) => <option key={i} value={item}>{item}</option>);

  const [cart, setCart] = useState({});
  const cartDisplay = Object.entries(cart).map(([key, value]) => (<li key={key}>{key} X {value}</li>)) ;
  const[numOfItems, setNumOfItem] = useState(1);
  const cartText = Object.keys(cart).length === 0 ? <label>Add items to cart</label> 
                                                  : <label>Number of items in cart: {numOfItems}</label>;



  function numberOfItems(){ 
    var values = 1;
    for (const item in cart){
      values += cart[item] 
      console.log(item)
    }
    setNumOfItem(numOfItems=>(values))
  };


  function addToCartHandler(e){
    if (item in cart){
      setCart(cart=> ({...cart ,[item]: cart[item] + 1 }))
      numberOfItems();
    }
    else{
      setCart(cart => ({...cart, [item]: 1}))
      numberOfItems();
    }
  };
  
// commenting some lines

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
        <form>
        <label for="products">Choose a Product: </label>
        <select onChange={e => {setItem(item=>(e.target.value));}} name="products" id="products">{productItems}</select>
        <button onClick={e =>{addToCartHandler(e)}} className="addToCart" type="button">Add To Cart</button>
      </form>
      <div>
        <ul>
          {cartDisplay}
        </ul>
      </div>
      <div>
        {cartText}
      </div>
      </header>
    </div>
  );
};

export default App;
