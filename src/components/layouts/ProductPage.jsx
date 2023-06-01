import * as React from 'react';
import { Button, Counter, SliderImg } from '../index.jsx';
import styles from '../../App.module.css';

export default function ProductPage({ setCart, cart }) {
    //Här skulle man ju egentligen hämta data från en databas, men det blir lite "dummy"-data nu bara
    //Och hade man en riktig db skulle man nog ha en egenskap under varje item som visade hur många av varje man har.. så det inte blir massa dubletter.. nu finns det bara ett item så det blir såhär så länge :)
    const sneakers = {
        name: "Fall Limited Edition Sneakers",
        price: 125,
        sale: "50%",
        oldPrice: 250,
        imgUrls: [
            "./src/assets/images/sneakers0.png",
            "./src/assets/images/sneakers1.png",
            "./src/assets/images/sneakers2.png",
            "./src/assets/images/sneakers3.png"
        ],
        alt: "A pair of sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
    };
    
    return (
        

        <section className={styles.productPageWrapper}>
            <section>
                <img src={sneakers.imgUrls[0]} alt={sneakers.alt} />

                <div className={styles.imgSliderWrapper}>
                    <SliderImg
                        imgSrc={sneakers.imgUrls[0]}
                        imgAlt={sneakers.alt}
                        isActive={true} //Den här ska bero på vilken bild som användaren senast klickat på
                    />
                    <SliderImg
                        imgSrc={sneakers.imgUrls[1]}
                        imgAlt={sneakers.alt}
                        isActive={false}
                    />
                    <SliderImg
                        imgSrc={sneakers.imgUrls[2]}
                        imgAlt={sneakers.alt}
                        isActive={false}
                    />
                    <SliderImg
                        imgSrc={sneakers.imgUrls[3]}
                        imgAlt={sneakers.alt}
                        isActive={false}
                    />
                </div>
            </section>
            <section className={styles.productPresentation}>
                <h2 className={styles.productMiniHeader}>Sneaker Company</h2>
                <h3 className={styles.productHeader}>{sneakers.name}</h3>
                <p className={styles.productPara}>{sneakers.description}</p>
                
                <div className={styles.priceWrapper}>
                    <h4 className={styles.priceTag}>${sneakers.price}</h4>
                    <h5 className={styles.sale}>{sneakers.sale}</h5>
                    <h6 className={styles.oldPrice}>${sneakers.oldPrice}</h6>
                </div>
                
                <div className={styles.buttonAndCounterWrapper}>
                    <Counter
                        cart={cart}
                        setCart={setCart}
                    />
                    <Button
                        setCart={setCart}
                        item={sneakers}
                    />
                </div>
            </section>
        </section>
    )
}