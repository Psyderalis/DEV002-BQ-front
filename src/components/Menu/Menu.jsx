import styles from './Menu.module.css'

import ProductCard from '../ProductCard/ProductCard';

export default function Menu ({products, addProduct}) {
    return (
        <div className={styles.container}>
            {
              products.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    img={product.image}
                    name={product.name}
                    price={product.price}
                    handleClick={() => addProduct(product)} />
                )
              })
            }
          </div>
    )
}