import styles from './Menu.module.css'

import ProductCard from '../ProductCard/ProductCard';

export default function Menu ({products, updateMessage, setOrderedProducts, orderedProducts}) {

  function addProduct(item) {
    if (!orderedProducts.some(product => product.id === item.id)) {
      const orderedProduct = {
        id: item.id,
        name: item.name,
        price: item.price,
        amount: 1
      }
      setOrderedProducts(prevProducts => [...prevProducts, orderedProduct])
    } else updateMessage('Ya se agregó este producto.')
  }

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