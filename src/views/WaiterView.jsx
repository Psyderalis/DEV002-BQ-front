import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../img/logo.png';
import ProductCard from "../components/ProductCard";

function MesaHomeView({ setUser, accessToken }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();


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

  // console.log(products)

  const logout = () => {
    localStorage.removeItem('accessToken')
    setUser(false)
    console.log('Se cerró la sesión')
    navigate('/')
  };

  const infoUser = () => {
    fetch('http://localhost:8080/users', {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }

  return (
    loading ? <h3>Cargando...</h3> :

      <div>
        <p>Mesa Home view</p>
        <button onClick={logout}> Logout </button>
        <button onClick={infoUser}> info usuaria </button>
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

export default MesaHomeView;