import React from 'react'
import products from '../../assets/Products/Products'


function Products() {
    return (
        <>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt="" />
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </>
    )
}

export default Products