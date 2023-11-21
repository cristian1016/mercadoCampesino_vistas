import React from 'react'
import products from '../../assets/Products/Products'
import './products.css'


function Products() {
    return (
        <>
            {products.map((product) => (
                <div className='card_product' key={product.id}>
                    <img className='image' src={product.image} alt="" />
                    <p className='name_product'>{product.name}</p>
                    <p className='price_product'>{product.price}</p>
                    <input className='buy' type="submit" value="Comprar"></input>
                </div>
            ))}
        </>
    )
}

export default Products