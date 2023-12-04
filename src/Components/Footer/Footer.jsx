import React from 'react'
import './Footer.css'


export default function Footer() {
  return (
    <>
      <footer>
        <section className='above'>
          <div className='cont_about_us'>
            <img className='imgs' src="/tienda_campe.png" alt="#" />
            <h3>Sobre nosotros</h3>
            <p>Colombiana de Comercio S.A.</p>
            <p>NIT: 890.900.943-1</p>
          </div>

          <div className='cont_email'>
            <img className='imgs' src="/email_campe.png" alt="#" />
            <p>mercadocampesino@gmail.com</p>
          </div>

          <div className='cont_phone'>
            <img className='imgs' src="/telefono_campe.png" alt="#" />
            <p>+57 313 629 7064</p>
            <p>+57 214 567 2345</p>
          </div>
        </section>

        <section className='below'>

        </section>
      </footer>
    </>
  )
}
