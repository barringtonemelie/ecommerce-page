import * as React from 'react';
import {
  EcommerceHeader, 
  ProductPage
} from "./components/index.jsx"; 
import styles from './App.module.css'; 

function App() {
  return (
    <div className={styles.app}>
      <EcommerceHeader/> 
      <ProductPage isActive={true} />
    </div>
  )
}

export default App


/*  

Components: 

EcommerceHeader
  Nav
  Cart 
    CartItem
ProductPage
  Button
  Counter

*/