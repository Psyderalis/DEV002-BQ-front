import { useEffect, useState } from 'react'
import { fetchUsers } from '../api'

import styles from './Employees.module.css'

export default function Employees() {
  const accessToken = localStorage.getItem('accessToken')
  const [users, setUsers] = useState(null)

  const handleShowEmployeesClick = () => {
    fetchUsers(accessToken)
      .then(json => setUsers(json))
      .catch(error => console.log(error))
  }

  return (

    <div className={styles.section}>
      <h2>Administrar trabajadores</h2>

      <div className={styles.container}>
        <h3>Listado de trabajadores</h3>
        <button onClick={handleShowEmployeesClick}>Mostrar</button>
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