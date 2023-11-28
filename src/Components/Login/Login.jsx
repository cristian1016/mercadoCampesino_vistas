import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <>
            <section className='login'>
                <div className='div_img_login'>
                    <img className='imagen_login' src="/imagen_login.png" alt="" />
                </div>

                <div className='title_logo_merCampesino'>
                    <div className='title_merCampesino_login'>
                        <img src="/logo_campesino.png" alt="" />

                        <div className='title_header'>

                            <div className='title_login'>
                                <h1>MERCADO CAMPESINO</h1>
                                <h3>LA MEJOR CALIDAD</h3>

                            </div>
                        </div>
                    </div>

                    <div className='form_login'>
                        {/* <a href="">Regresar</a> */}
                        <div className='center_login'>

                            <form className='form_login_' action="/login" method="post">
                                <div class="login_form">

                                    <div className="login_center">

                                        <div class="digitar">
                                            <label>Correo</label><br />
                                            <input type="text" name="correo" placeholder='Ingresa tu correo' required ></input>
                                        </div>

                                        <div class="digitar">
                                            <label>Contraseña</label> <br />
                                            <input type="password" name="contrasenia" placeholder='Ingresa tu contraseña' required ></input>

                                        </div>

                                        <div className='start_olvidarContra'>
                                            <a className="link_olvidarContra" href="">¿Olvide mi contraseña? </a>
                                        <p className="link_registro">¿No te has registrado? <a className="a_registro" href="/interfaz-Registro"> Registrarse</a></p>
                                        </div>
                                    </div>

                                    <div className="loguear">
                                        <button className='loguear_button'>Ingresar</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
