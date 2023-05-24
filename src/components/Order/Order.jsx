import styles from './Order.module.css'

export default function Order({ orderedProducts }) {
    console.log(orderedProducts)
    return (
        <div className={styles.orderContainer}>
            <h2>Orden</h2>
            <div className={styles.productsContainer}>
                {orderedProducts.map(product => {
                    return (
                        <div className={styles.productGrid} key={product}>
                            <p>producto</p>
                            <p>valor</p>
                            <p>eliminar</p>
                        </div>
                    )
                })}
            </div>
            <div className={styles.check}>
                <p>Total</p>
                <p>$</p>
            </div>
            <div className={styles.btnContainer}>
                <button>Enviar a cocina</button>
                <button>Eliminar</button>
            </div>

        </div>
    )
}