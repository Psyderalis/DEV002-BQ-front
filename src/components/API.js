
const login = async (credentials) => {
  try {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })

    const json = await response.json()

    if (response.ok) {
      localStorage.setItem('accessToken', json.accessToken)
      console.log('Inicio de sesión exitoso.')
      return { success: true }
    } else {
      console.log(json)
      return { error: json }
    }

  } catch (error) {
    console.error('Error en el inicio de sesión.')
    return { error: 'Error en el inicio de sesión, por favor inténtelo nuevamente.' }
  }
}

const fetchProducts = async (token) => {
  try {
    const response = await fetch('http://localhost:8080/products', {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    return await response.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const fetchUsers = async (token) => {
  try {
    const response = await fetch('http://localhost:8080/users', {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
    throw error
  }
}

export {
  login,
  fetchProducts,
  fetchUsers
}
