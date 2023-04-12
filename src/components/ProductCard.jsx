import React from "react";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className='product-container'>
      <img className='product-img' src={img} alt={`imagen de ${name}`} />
      <p className='product-name'>{name}</p>
      <p className='product-price'>Precio: {price}</p>
    </div>
  )
};

export default ProductCard;
