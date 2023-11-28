import React from 'react'
import './PerfilUsuario.css'
import Header from '../Header/Header'
import { useState } from 'react'



function PerfilUsuario() {

  const [informacionVisible, setInformacionVisible] = useState(false);

  const toggleInformacion = () => {
    setInformacionVisible(!informacionVisible);
  }

  const [privacidad, setPrivacidad] = useState(false);

  const toggleInformacionPrivate = () => {
    setPrivacidad(!privacidad);
  }

  return (
    <>
      <Header />
      <section>
        <div className='cont-banner'></div>

        <div>
          <div className='cont-user'>
            <img src="./Campesino-perfil.jpg" alt="" />
          </div>

          <div className='btn-edit'>
            <button>Editar perfil</button>
          </div>
        </div>

        <div className='cont-infoUser'>
          <h2>Roberto Catro Goméz</h2>
          <p>Armenia, Quindio</p>
          <p>20 años</p>
        </div>

        <div className='cont-compras'>
          <button className='btn-compras' onClick={toggleInformacion}>Control general de compras</button>
          {informacionVisible && (
            <div>

              <div className='cont-mercado'>
                <img src="/mercado1.png" alt="" width={100} height={100}/>
                <div className='cont-infoMercado'>
                  <p>La soledad</p>
                  <a href="">Visitar mercado</a>
                </div>
              </div>
              
            </div>
          )}
        </div>

        <div className='cont-compras'>
          <button className='btn-compras' onClick={toggleInformacionPrivate}>Politica y seguridad</button>
          {privacidad && (
            <div>
              seguridad
            </div>
          )}
        </div>

      </section>
    </>
  )
}
export default PerfilUsuario
