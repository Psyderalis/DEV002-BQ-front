import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../img/logo.png';
import ProductCard from "../components/ProductCard";

function MesaHomeView() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const accessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()

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

  console.log(products)

  if (accessToken) {

    return (
      loading ? <h3>Cargando...</h3> :

        <div>
          <p>Mesa Home view</p>
          <h3> INICIO DE SESIÓN EXITOSO 💗✨</h3>
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
  } else {
    navigate('/')
  }

};

export default MesaHomeView;