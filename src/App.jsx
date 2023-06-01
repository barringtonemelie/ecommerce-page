import * as React from 'react';
import {
  EcommerceHeader, 
  ProductPage
} from "./components/index.jsx"; 
import styles from './App.module.css'; 

function App() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (item, remove) => {
    if (remove) { 
      //I en riktig app hade vi haft IDn att jobba med.. då hade jag gjort såhär: 
      // const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
      // setCart(newCart);

      if (cart.length >= 1) {
        //Nu tar jag bara bort elementet på index 0...
        const newCart = cart.filter((cartItem, index) => index !== 0);
        setCart(newCart);
      }

      return; 

    } else {
      setCart([...cart, item]);
    }
  }

  return (
    <div className={styles.app}>
      <EcommerceHeader
        setCart={addToCart}
        cart={cart}
      /> 
      <ProductPage
        cart={cart}
        setCart={addToCart}
      />
    </div>
  )
}

export default App


/*  

Components: 

EcommerceHeader
  Nav
  Cart --- När man hovrar över Cart så ska CartItem visas
    CartItem 
ProductPage
  Button --- Här ska varan skickas till Cart
  Counter --- Den här behöver få reda på antal varor i Cart
  SliderImg

*/