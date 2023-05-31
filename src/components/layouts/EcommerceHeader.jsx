import * as React from 'react'
import {
    Nav,
    Cart
} from '../index.jsx';
import styles from '../../App.module.css'; 

export default function EcommerceHeader() {
    return (
        <header className={styles.header}>
            <h1 className={styles.pageTitle}>sneakers</h1>
            <Nav />
            <Cart />
            <img src="./src/assets/profile.png" alt="Profile picture" className={styles.profileImg} />
        </header>
    )
}