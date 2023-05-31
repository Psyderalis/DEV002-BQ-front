import { useState } from 'react'
import { fetchUsers, addUser } from '../api'

import styles from './Employees.module.css'

export default function Employees() {
  const accessToken = localStorage.getItem('accessToken')
  const [users, setUsers] = useState(null)
  const [newUser, setNewUser] = useState({
    name: '',
    id: '',
    role: '',
    email: '',
    password: ''
  })

  const handleShowUsersClick = () => {
    fetchUsers(accessToken)
      .then(json => setUsers(json))
      .catch(error => console.log(error))
  }
  // console.log(users)


  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const handleForm = (e) => {
    e.preventDefault()
    addUser(accessToken, newUser)
      .then(json => setUsers(json))
      .catch(error => console.log(error))
    console.log(newUser)
    setNewUser({
      name: '',
      id: '',
      role: '',
      email: '',
      password: ''
    })
  }

  return (

    <div className={styles.section}>
      <h2>Administrar trabajadores</h2>

      <div className={styles.container}>
        <h3>Listado de trabajadores</h3>
        <button onClick={handleShowUsersClick}>Mostrar</button>
        <div className={styles.container}>
          {users ? (
            <div>
              {users.map(user => (
                <div key={user.id}>
                  <h4>{`${user.id}: ${user.email}`}</h4>
                  <p>{`Rol: ${user.role}`}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Click al botón para mostrar empleados.</p>
          )}
        </div>
      </div>
      <div className={styles.container}>
        <h3>Agregar trabajadores</h3>
        <form onSubmit={handleForm}>
          <input
            type='text'
            name='name'
            value={newUser.name}
            placeholder='Ingrese nombre y apellido.'
            onChange={handleInputChange} />
          <input
            type='text'
            name='id'
            value={newUser.id}
            placeholder='Ingrese rut'
            onChange={handleInputChange} />
          <input
            type='text'
            name='role'
            value={newUser.role}
            placeholder='Ingrese rol'
            onChange={handleInputChange} />
          <input
            type='text'
            name='email'
            value={newUser.email}
            placeholder='Ingrese correo'
            onChange={handleInputChange} />
          <input
            type='text'
            name='password'
            value={newUser.password}
            placeholder='Ingrese contraseña'
            onChange={handleInputChange} />
          <button type='subtmit'>Agregar empleado</button>
        </form>
      </div>
      <div className={styles.container}>
        <h3>Eliminar trabajadores</h3>
      </div>
      <div className={styles.container}>
        <h3>Actualizar datos de trabajadores</h3>
      </div>
    </div>
  )
}