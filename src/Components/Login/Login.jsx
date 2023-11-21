import React from 'react'
// import './Login.css'

export default function Login() {
    return (
        <>
            <section>
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <a href="">Regresar</a>

                    <div>
                        <img src="/logo_campesino.png" alt="" />
                        <div className='title_login'>
                            <h2>MERCADO CAMPESINO</h2>
                            <h3>LA MEJOR CALIDAD</h3>
                        </div>
                    </div>

                    <form action="/login" method="post">
                        <div class="login">

                            <div id="login_center">

                                <div class="digitar">
                                    <input type="text" name="correo" required></input>
                                    <label>Correo electronico</label>
                                </div>

                                <div class="digitar">
                                    <input type="password" name="contrasenia" required></input>
                                    <label>Contraseña</label>
                                </div>

                                <div id="logear">
                                    <input type="submit" value="INGRESAR" class="logear"></input>
                                </div>
                            </div>

                            <div id="link_login">
                                <p class="comunity">¿No te has registrado? <a class="link" href="/interfaz-Registro"> Registrarse</a></p>
                                <a class="link" href="">¿Olvide mi contraseña? </a>
                            </div>

                            <div id="link_inicio">
                                <input type="submit" value="Ingrsar"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
