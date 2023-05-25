import styles from './Order.module.css'

import { useState, useEffect } from 'react'

export default function Order({ orderedProducts, deleteProduct, increaseProductAmount, decreaseProductAmount, message, deleteOrder }) {
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        updateTotal();
      }, [orderedProducts]);

    function updateTotal() {
        let newTotal = 0
        orderedProducts.forEach(product => {
            newTotal += product.price * product.amount
        })
        setTotal(newTotal)
    }

    return (
        <div className={styles.orderContainer}>
            <h2>Orden</h2>
            <p className={styles.msg}>{message}</p>
            <div className={styles.productsContainer}>
                {orderedProducts.map(product => {
                    return (
                        <div className={styles.productGrid} key={product.id}>
                            <p>{product.name}</p>
                            <div className={styles.counter}>
                                <button onClick={() => decreaseProductAmount(product)}>
                                    -
                                </button>
                                <p>{product.amount}</p>
                                <button onClick={() => increaseProductAmount(product)} >
                                    +
                                </button>
                            </div>
                            <p>${product.price}</p>
                            <p
                                className={styles.remover}
                                onClick={() => deleteProduct(product)}>
                                X
                            </p>
                        </div>
                    )
                })}
            </div>
            <div className={styles.check}>
                <p>Total</p>
                <p>$ {total}</p>
            </div>
            <div className={styles.btnContainer}>
                <button>Enviar a cocina</button>
                <button onClick={deleteOrder}>
                    Eliminar pedido
                    </button>
            </div>

        </div>
    )
}