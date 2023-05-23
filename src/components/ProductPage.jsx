import * as React from 'react';
import { Button, Counter } from './index.jsx';
import styles from '../App.module.css'

export default function ProductPage() {
    return (
        <section className={styles.productPageWrapper}>
            <section className={styles.productImages}>
                <img className={styles.mainProductImg} src="./src/assets/sneakers0.png" alt="A pair of sneakers" />

                <div className={styles.imgSliderWrapper}>
                    <img className={styles.imgSliderOne} src="./src/assets/sneakers0.png" alt="A pair of sneakers" />
                    <img className={styles.imgSliderTwo} src="./src/assets/sneakers1.png" alt="A pair of sneakers" />
                    <img className={styles.imgSliderThree} src="./src/assets/sneakers2.png" alt="A pair of sneakers" />
                    <img className={styles.imgSliderFour} src="./src/assets/sneakers3.png" alt="A pair of sneakers" />
                </div>
            </section>
            <section className={styles.productPresentation}>
                
            </section>
            <Counter />
            <Button />
        </section>
    )
}