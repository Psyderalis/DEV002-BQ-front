import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../img/logo.png';
import ProductCard from "../components/ProductCard";

function WaiterView() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

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

  return (
    loading ? <h3>Cargando...</h3> :

      <div>
        <p>Mesa Home view</p>
        <div>
          {
            products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  img={product.image}
                  name={product.name}
                  price={product.price} />
              )
            })
          }
        </div>
      </div>
  )
};

export default WaiterView;