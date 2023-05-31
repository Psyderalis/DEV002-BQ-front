import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { fetchProducts } from '../../components/api';


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
   fetchProducts(accessToken)
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

  function updateMessage(newMessage) {
    setMessage(newMessage)
    setTimeout(() => {
      setMessage('')
    }, 2000)
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
            updateMessage={updateMessage}
            orderedProducts={orderedProducts}
            setOrderedProducts={setOrderedProducts} />
          <Order
            orderedProducts={orderedProducts}
            setOrderedProducts={setOrderedProducts}
            message={message}
            updateMessage={updateMessage} />
        </div>
      </div>
  )
};

export default WaiterView;