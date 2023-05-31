import * as React from 'react'
import styles from '../../App.module.css'; 

export default function Counter() {
    return (
        <div className={styles.counter}>
            <img className={styles.minus} src="./src/assets/minus.svg"/>
            <span className={styles.numOfItems}>0</span>
            <img className={styles.plus} src="./src/assets/plus.svg"/>
        </div>
    )
}