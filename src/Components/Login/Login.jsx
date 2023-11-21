import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <>
            <section className='login'>
                <div>
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
                                            <input type="text" name="correo" required></input>
                                        </div>

                                        <div class="digitar">
                                            <label>Contraseña</label> <br />
                                            <input type="password" name="contrasenia" required></input>

                                        </div>

                                    </div>

                                    <div className="link_login">
                                        <p class="comunity">¿No te has registrado? <a class="link" href="/interfaz-Registro"> Registrarse</a></p>
                                        <a class="link" href="">¿Olvide mi contraseña? </a>
                                    </div>


                                    <div className="logear">
                                        <input type="submit" value="INGRESAR" class="logear"></input>
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
