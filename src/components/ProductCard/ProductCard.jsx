import React from "react";
import styles from './ProductCard.module.css'

const ProductCard = ({ img, name, price, handleClick }) => {
  return (
    <div
      className={styles.container}
      onClick={handleClick}>
      <img src={img} alt={`imagen de ${name}`} />
      <p className={styles.productName}>{name}</p>
      <p className='product-price'>Precio: ${price}</p>
    </div>
  )
};

export default ProductCard;
