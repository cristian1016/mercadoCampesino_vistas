import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Product from '../Product/Product.jsx'
import './Home.css'
import ProductosDescuentos from '../Product/ProductosDescuentos'
import ProductList from '../ProductList/ProductList.jsx'


export default function Home() {
    return (
        <>
            <Header />
            <section className=''>
                <div className='folder'>
                    <img src="/home_Campesinos.png" alt="" />
                </div>

                <div className='center_mercados'>

                    <h2 className='title_recomendados'>Mercados Recomendos</h2>
                    <p className='frase_recomendados'>encuentra los mercados mas destacados, con productos de calidad</p>

                    <div className='recommended_markets'>
                        <div className='mercados_recomendados'>
                            <img className='img' src="/mercado_1.png" alt="" />
                            <h2>Finca soledad</h2>
                        </div>

                        <div className='mercados_recomendados'>
                            <img className='img' src="/mercado_2.png" alt="#" />
                            <h2>Mercado campestre</h2>
                        </div>

                        <div className='mercados_recomendados'>
                            <img className='img' src="/mercado_3.png" alt="#" />
                            <h2>La soledad</h2>
                        </div>

                        <div className='mercados_recomendados'>
                            <img className='img' src="/mercado_5.png" alt="#" />
                            <h2>La abuela</h2>
                        </div>

                        <div className='mercados_recomendados'>
                            <img className='img' src="/mercado_4.png" alt="#" />
                            <h2>Granja familiar</h2>
                        </div>

                        <div className='mercados_recomendados'>
                            <img className='img' src="/mercado_6.png" alt="#" />
                            <h2>Mercado social</h2>
                        </div>

                        <div className='mercados_recomendados'>
                            <img className='img' src="/mercado_7.png" alt="#" />
                            <h2>Mercado sol</h2>
                        </div>

                        <div className='mercados_recomendados'>
                            <img className='img' src="/mercado_8.png" alt="#" />
                            <h2>Mercado corazon</h2>
                        </div>
                    </div>
                </div>

                <hr />
{/* 
                <div className='featured_products'>
                    <div className='serch_products'>
                        <h2>Productos destacados</h2>
                        <p>encuentra los emjores productos con una exelente calidad</p>

                        <div className='serch_'>
                            <input className='busquedaProductos' type="search" name="busquedaProductos" placeholder="Buscar..."></input>
                            <input className='buscar' type="submit" value="Buscar"></input>
                        </div>

                    </div>
                </div> */}
<ProductList></ProductList>


                <div className='center_productsDiscount producColor'>
                        <h2>Descuentos especialmente para tí</h2>
                    <div className='products_discount'>
                        <ProductosDescuentos />
                    </div>
                </div>


                <div className='center_products_'>
                    <div className='products_'>
                        <Product />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
