import React from 'react'
import './PerfilUsuario.css'
import Header from '../Header/Header'

function PerfilUsuario() {
  return (
    <>
    <Header/>
    <section>
        <div>
            <img className='img_portada' src="/img_portada_perfilUser.png" alt="" />
        </div>
    </section>
    </>
  )
}

export default PerfilUsuario