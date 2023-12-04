import React from 'react';
import products from '../../assets/Products/Products';
import './productsDescuentos.css'

function ProductosDescuentos() {

  const firstFourProducts = products.slice(0, 4);

  return (
    <>
      {firstFourProducts.map((product) => (
        <div className='card_products' key={product.id}>
          <img className='images' src={product.image} alt="" />
          <p className='name_products'>{product.name}</p>
          <p className='price_discount'>Precio: ${product.priceDiscount}</p>
          <p className='price_products'>${product.price}</p>
          <input className='buys' type="submit" value="Comprar" />
        </div>
      ))}
    </>
  );
}

export default ProductosDescuentos;
