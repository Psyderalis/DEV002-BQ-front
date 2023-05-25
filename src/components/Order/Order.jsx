import styles from './Order.module.css'

export default function Order({ orderedProducts, deleteProduct }) {

    return (
        <div className={styles.orderContainer}>
            <h2>Orden</h2>
            <div className={styles.productsContainer}>
                {orderedProducts.map(product => {
                    return (
                        <div className={styles.productGrid} key={product.id}>
                            <p>{product.name}</p>
                            <div className={styles.counter}>
                                <button>-</button>
                                <p>{product.amount}</p>
                                <button>+</button>
                            </div>
                            <p>$ ${product.price}</p>
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
                <p>$</p>
            </div>
            <div className={styles.btnContainer}>
                <button>Enviar a cocina</button>
                <button>Eliminar pedido</button>
            </div>

        </div>
    )
}