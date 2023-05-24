const login = (credentials) => {
  fetch('http://localhost:8080/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((res) => res.json())
};

const infoUser = () => {
  fetch('http://localhost:8080/users', {
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json))
};

const getProducts = () => {
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
};

export {
  login
}