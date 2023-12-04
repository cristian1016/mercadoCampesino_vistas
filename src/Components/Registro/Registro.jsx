import React from 'react'
import './Registro.css'

export default function Registro() {
    return (
        <>
            <section className='registro'>
                <div className='register_form'>

                <a className='regresar_registro' href="/">Regresar</a>

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
                                    <div className="digitar">
                                        <label for="digitar">Nombre</label><br />
                                        <input name="nombres" type="text" placeholder='Ingresa tu nombre' required></input>
                                    </div>

                                    <div className="digitar">
                                        <label for="digitar">Apellidos</label><br />
                                        <input name="apellidos" type="text" placeholder='Ingresa tus apellidos'  required></input>
                                    </div>

                                    <div className="digitar">
                                        <label for="digitar">Fecha de nacimiento</label><br />
                                        <input name="fechaNAcimiento" type="text" placeholder='Ingresa tu fecha de nacimiento' required></input>
                                    </div>

                                    <div className="digitar">
                                        <label for="digitar">Contraseña</label><br />
                                        <input name="contraseña" type="password" placeholder='Ingresa tu contraseña' required></input>
                                    </div>

                                    <div className="digitar">
                                        <label for="digitar">Genero</label><br />
                                        <input name="genero" type="text" placeholder='Ingresa tu genero' required></input>
                                    </div>
                                </div>

                                <div className='part_2'>
                                    <div className="digitar">
                                        <label>Telefono</label><br />
                                        <input name="telefono" type="tel" placeholder='Ingresa tu telefono' required></input>
                                    </div>

                                    <div className="digitar">
                                        <label for="digitar">Email</label><br />
                                        <input name="correo" type="email" placeholder='Ingresa tu correo' required></input>
                                    </div>

                                    <div className="digitar">
                                        <label for="digitar">Direccion</label><br />
                                        <input name="Direccion" type="text" placeholder='Ingresa tu direccion' required></input>
                                    </div>

                                    <div className="digitar">
                                        <label for="digitar">Confrmar Contraseña</label><br />
                                        <input name="Confitmar_contraseña" type="password" placeholder='Confirma tu contraseña' required></input>
                                    </div>
                                </div>
                            </div>

                            <div className="buttom">


                                <div className="link_login">
                                    <p>¿Ya tienes cuenta?<a className="link_iniciar" href="/login">Iniciar sesion</a></p>
                                </div>

                                <div className="link_inicio">
                                    <p>Volver a <a className="link_inicio" href="/">Inicio</a></p>
                                </div>
                            </div>

                            <div className="input_registrar">
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
