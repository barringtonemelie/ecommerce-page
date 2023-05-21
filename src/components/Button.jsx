import * as React from 'react'
import styles from '../App.module.css'; 

export default function Button() {
    return (
        <button className={styles.cartBtn}>
            <div className={styles.cartBtnWrapper}>
                <img src="./src/assets/cart-shape.svg" alt="Cart icon" className={styles.cartBtnIcon} />
                <p className={styles.cartBtnText}>Add to cart</p>
            </div>
        </button>
    )
}