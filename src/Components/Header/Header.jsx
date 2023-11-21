import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'


export default function Header() {
    return (
        <>
            <header>
                <div className='title_merCampesino'>
                    <img src="/logo_campesino.png" alt="" />
                    <div className='title_header'>
                        <h1>MERCADO CAMPESINO</h1>
                        <h3>LA MEJOR CALIDAD</h3>
                    </div>
                </div>

                <div className='imgHeader_navbar'>
                    <div className='img_header'>
                        <div className='campana'>
                            <img className='img_bell' src="/bell.png" alt="" />
                        </div>

                        <div className='cart'>
                            <img className='img_cart' src="/cart.png" alt="" />
                        </div>
                    </div>

                    <div className='navbar'>
                        <Navbar />
                    </div>
                </div>

            </header>
        </>
    )
}
