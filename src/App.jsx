import * as React from 'react';
import {
  Button,
  Cart,
  CartItem,
  Counter,
  EcommerceHeader, 
  ProductPage
} from "./components/index.jsx"; 
import styles from './App.module.css'; 

function App() {
  return (
    <div className="App">
      <EcommerceHeader/> 
      <ProductPage/>
    </div>
  )
}

export default App


/*  

Components: 

EcommerceHeader
  Cart 
    CartItem
ProductPage
  Button
  Counter

*/