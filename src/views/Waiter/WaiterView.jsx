import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import styles from './Waiter.module.css'

import Menu from '../../components/Menu/Menu'
import Order from "../../components/Order/Order";

function WaiterView() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [orderedProducts, setOrderedProducts] = useState([])
  const [message, setMessage] = useState('')


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

  function updateMessage (newMessage) {
    setMessage(newMessage)
    setTimeout(() => {
      setMessage('')
    }, 2000)
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
    } else updateMessage('Ya se agregó este producto')
  }

  function deleteProduct(item) {
    const updateProducts = orderedProducts.filter(product => product.id !== item.id)
    setOrderedProducts(updateProducts)
  }

  function increaseProductAmount(item) {
    const updatedProducts = orderedProducts.map(product => {
      if (product.id === item.id) {
        return { ...product, amount: product.amount + 1 }
      }
      return product
    })
    setOrderedProducts(updatedProducts)
  }

  function decreaseProductAmount(item) {
    const updatedProducts = orderedProducts.map(product => {
      if (product.id === item.id && item.amount > 1) {
        return { ...product, amount: product.amount - 1 }
      }
      return product
    })
    setOrderedProducts(updatedProducts)
  }

  function deleteOrder () {
    setOrderedProducts([])
    updateMessage('Orden eliminada')
  }

  return (
    loading ? <h3>Cargando...</h3> :

      <div>
        <nav>
          <h1>Vista Mesera</h1>
          <button onClick={cerrarSesion}>cerrar sesión</button>
        </nav>

        <div className={styles.container}>
          <Menu
            products={products}
            addProduct={addProduct} />
          <Order
            orderedProducts={orderedProducts}
            deleteProduct={deleteProduct}
            decreaseProductAmount={decreaseProductAmount}
            increaseProductAmount={increaseProductAmount}
            message={message}
            deleteOrder={deleteOrder} />
        </div>
      </div>
  )
};

export default WaiterView;