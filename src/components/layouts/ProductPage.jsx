import * as React from 'react';
import { Button, Counter, SliderImg } from '../index.jsx';
import styles from '../../App.module.css';

export default function ProductPage({isActive}) {
    return (
        <section className={styles.productPageWrapper}>
            <section>
                <img src="./src/assets/sneakers0.png" alt="A pair of sneakers" />

                <div className={styles.imgSliderWrapper}>
                    <SliderImg
                        imgSrc={"./src/assets/sneakers0.png"}
                        imgAlt={"A pair of sneakers"}
                        isActive={true}
                    />
                    <SliderImg
                        imgSrc={"./src/assets/sneakers1.png"}
                        imgAlt={"A pair of sneakers"}
                        isActive={false}
                    />
                    <SliderImg
                        imgSrc={"./src/assets/sneakers2.png"}
                        imgAlt={"A pair of sneakers"}
                        isActive={false}
                    />
                    <SliderImg
                        imgSrc={"./src/assets/sneakers3.png"}
                        imgAlt={"A pair of sneakers"}
                        isActive={false}
                    />
                </div>
            </section>
            <section className={styles.productPresentation}>
                <h2 className={styles.productMiniHeader}>Sneaker Company</h2>
                <h3 className={styles.productHeader}>Fall Limited Edition Sneakers</h3>
                <p className={styles.productPara}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                
                <div className={styles.priceWrapper}>
                    <h4 className={styles.priceTag}>$125.00</h4>
                    <h5 className={styles.sale}>50%</h5>
                    <h6 className={styles.oldPrice}>$250.00</h6>
                </div>
                
                <div className={styles.buttonAndCounterWrapper}>
                    <Counter />
                    <Button />
                </div>
            </section>
        </section>
    )
}