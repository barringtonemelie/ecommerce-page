import * as React from 'react'
import styles from '../../App.module.css'; 
import { CartItem } from '.././index'

export default function Cart({ cart, setCart }) {
    const [cartOpen, setCartOpen] = React.useState(false);

    return (
        <div
            className={styles.cartIconWrapper}
            onMouseEnter={() => setCartOpen(true)}
            onMouseLeave={() => setCartOpen(false)}            
        >
            <img src="./src/assets/images/cart-shape-grey.svg" alt="Cart icon" styles={styles.cartIcon} />
            
            {cart.length > 0 ? <span className={styles.cartNum}>{cart.length}</span> : null}
            
            <CartItem
                cartOpen={cartOpen}
                cart={cart}
                setCart={setCart}
            />
        </div>
    )
}