import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Products from '../Products/Products'


export default function Home() {
    return (
        <>
            <Header></Header>
            <section>
                <div className='folder'>
                    <img src="/home_campesino" alt="" />
                </div>

                <div className='recommended markets'>
                    <div>
                        <img className='img' src="" alt="" />
                        <h1>Finca soledad</h1>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <h1>Mercado campestre</h1>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <h1>La soledad</h1>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <h1>La abuela</h1>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <h1>Granja familiar</h1>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <h1>Mercado social</h1>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <h1>Mercado sol</h1>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <h1>Mercado corazon</h1>
                    </div>
                </div>
                <hr />
                <div>
                    <Products/>
                </div>
            </section>
            <Footer/>
        </>
    )
}
