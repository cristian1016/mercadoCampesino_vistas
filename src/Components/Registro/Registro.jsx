import React from 'react'
import './Registro.css'

export default function Registro() {
    return (
        <>
            <section className='registro'>
                <div className='register_form'>
                    {/* <a href="">Regresar</a> */}

                    <div className='title_merCampesino_regsiter'>
                        <img src="/logo_campesino.png" alt="" />

                        <div className='title_header'>

                            <div className='title_login'>
                                <h1>MERCADO CAMPESINO</h1>
                                <h3>LA MEJOR CALIDAD</h3>

                            </div>
                        </div>
                    </div>

                    <div className='center_form_register'>
                        <form className='form_registro_' action="/registro" method="post">
                            <div class="registro">
                                <div className='part_1'>
                                    <div class="digitar">
                                        <label for="digitar">Nombre</label><br />
                                        <input name="nombres" type="text" required></input>
                                    </div>

                                    <div class="digitar">
                                        <label for="digitar">Apellidos</label><br />
                                        <input name="apellidos" type="text" required></input>
                                    </div>

                                    <div class="digitar">
                                        <label for="digitar">Fecha de nacimiento</label><br />
                                        <input name="fechaNAcimiento" type="text" required></input>
                                    </div>

                                    <div class="digitar">
                                        <label for="digitar">Contraseña</label><br />
                                        <input name="contraseña" type="password" required></input>
                                    </div>

                                    <div class="digitar">
                                        <label for="digitar">Genero</label><br />
                                        <input name="genero" type="text" required></input>
                                    </div>
                                </div>

                                <div className='part_2'>
                                    <div class="digitar">
                                        <label>Telefono</label><br />
                                        <input name="telefono" type="tel" required></input>
                                    </div>

                                    <div class="digitar">
                                        <label for="digitar">Email</label><br />
                                        <input name="correo" type="email" required></input>
                                    </div>

                                    <div class="digitar">
                                        <label for="digitar">Direccion</label><br />
                                        <input name="Direccion" type="text" required></input>
                                    </div>

                                    <div class="digitar">
                                        <label for="digitar">Confrmar Contraseña</label><br />
                                        <input name="Confitmar_contraseña" type="password" required></input>
                                    </div>
                                </div>
                            </div>

                            <div class="buttom">


                                <div id="link_login">
                                    <a class="link_iniciar" href="#">¿Ya tienes cuenta?</a>
                                </div>

                                <div className="link_inicio">
                                    <p class="inicio">Volver a <a class="link" href="/">Inicio</a></p>
                                </div>
                            </div>

                            <div id="input_registrar">
                                    <a
                                        className="registras_button" href="/interfaz-login">
                                        <input type="submit" value="Registrarse"></input>
                                    </a>
                                </div>
                        </form>
                    </div>

                </div>

                <div>
                    <img className='img_registro' src="/imagen_registro.png" alt="#" />
                </div>
            </section>

        </>
    )
}
