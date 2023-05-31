import styles from './Products.module.css'

export default function Products() {
  return (
    <div className={styles.section}>
      <h2>Administrar productos</h2>

      <div className={styles.container}>
        <h3>Listado de productos</h3>
      </div>
      <div className={styles.container}>
        <h3>Agregar productos</h3>
      </div>
      <div className={styles.container}>
        <h3>Eliminar productos</h3>
      </div>
      <div className={styles.container}>
        <h3>Actualizar datos de productos</h3>
      </div>
    </div>
  )
}