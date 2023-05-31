
const login = (credentials) => {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then((res) => {
      return res.json()
        .then(json => {
          if (res.ok) {
            localStorage.setItem('accessToken', json.accessToken)
            console.log('Inicio de sesión exitoso.')
            return { success: true }
          } else {
            console.log(json)
            return { error: json }
          }
        })
    })
    .catch(() => {
      console.error('Error en el inicio de sesión.')
      return { error: 'Error en el inicio de sesión, por favor inténtelo nuevamente.' }
    })
}

const fetchProducts = async (token) => {
  try {
    const res = await fetch('http://localhost:8080/products', {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    return await res.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export {
  login,
  fetchProducts
}
