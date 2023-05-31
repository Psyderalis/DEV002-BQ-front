import styles from './Admin.module.css'

import Products from '../../components/Products/Products'
import Employees from '../../components/Employees/Employees'

export default function AdminView() {
  return (
    <>
      <h1>Vista Admin</h1>
      <div className={styles.mainContainer}>
        <Employees />
        <Products />
      </div>

    </>
  )
}