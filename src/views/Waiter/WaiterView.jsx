import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import styles from './Waiter.module.css'

import ProductCard from "../../components/ProductCard/ProductCard";
import Order from "../../components/Order/Order";

function WaiterView() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [orderedProducts, setOrderedProducts] = useState([])

  const navigate = useNavigate()

  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    fetch('http://localhost:8080/products', {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(json => {
        setProducts(json)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])


  function cerrarSesion() {
    localStorage.removeItem('accessToken')
    if (localStorage.length === 0) {
      console.log('sesión cerrada')
    }
    navigate('/')
  }


  function addProduct(item) {
    if (!orderedProducts.some(product => product.id === item.id)) {
      const orderedProduct = {
        id: item.id,
        name: item.name,
        price: item.price,
        amount: 1
      }
      setOrderedProducts(prevProducts => [...prevProducts, orderedProduct])
    } else console.log('item ya existe')
  }

  function deleteProduct(item) {
    const updateProducts = orderedProducts.filter(product => product.id !== item.id)
    setOrderedProducts(updateProducts)
  }

  function countProduct(product) {
  }

  return (
    loading ? <h3>Cargando...</h3> :

      <div>
        <nav>
          <h1>Vista Mesera</h1>
          <button onClick={cerrarSesion}>cerrar sesión</button>
        </nav>

        <div className={styles.container}>
          <div className={styles.productsContainer}>
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
          <Order
            orderedProducts={orderedProducts}
            deleteProduct={deleteProduct} />
        </div>
      </div>
  )
};

export default WaiterView;