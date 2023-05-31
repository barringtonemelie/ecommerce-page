import * as React from 'react';
import { Button, Counter, SliderImg } from '../index.jsx';
import styles from '../../App.module.css';

export default function ProductPage({isActive}) {
    return (
        <section className={styles.productPageWrapper}>
            <section className={styles.productImages}>
                <img className={styles.mainProductImg} src="./src/assets/sneakers0.png" alt="A pair of sneakers" />

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
                
            </section>
            <Counter />
            <Button />
        </section>
    )
}