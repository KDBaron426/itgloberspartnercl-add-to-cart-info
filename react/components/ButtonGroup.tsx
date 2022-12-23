import React from 'react'

import styles from './styles.css'

const ButtonGroup = () => {
  return (
    <>
      <div className={styles.department__button}>
        <a href="/checkout" className={styles.text}>
          IR AL CHECKOUT
        </a>
      </div>
      <div className={styles.department__button}>
        <a href="/" className={styles.text}>
          CONTINÚAR COMPRANDO
        </a>
      </div>
      <div className={styles.department__button}>
        <a href="/cart" className={styles.text}>
          VER MI CARRITO
        </a>
      </div>
    </>
  )
}

export default ButtonGroup
