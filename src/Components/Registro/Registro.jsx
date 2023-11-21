import React from 'react'
import './Registro'

export default function Registro() {
    return (
        <>
            <div>
                <a href="">Regresar</a>

                <div>
                    <img src="/logo_campesino.png" alt="" />
                    <div className='title_login'>
                        <h2>MERCADO CAMPESINO</h2>
                        <h3>LA MEJOR CALIDAD</h3>
                    </div>
                </div>

                <form action="/registro" method="post" class="form">
                    <div class="registro">
                        <div className='part_1'>
                            <div class="digitar">
                                <input name="nombres" type="text" required></input>
                                <label for="digitar">Nombre</label>
                            </div>

                            <div class="digitar">
                                <input name="apellidos" type="text" required></input>
                                <label for="digitar">Apellidos</label>
                            </div>

                            <div class="digitar">
                                <input name="fechaNAcimiento" type="text" required></input>
                                <label for="digitar">Fecha de nacimiento</label>
                            </div>

                            <div class="digitar">
                                <input name="contraseña" type="password" required></input>
                                <label for="digitar">Contraseña</label>
                            </div>

                            <div class="digitar">
                                <input name="genero" type="text" required></input>
                                <label for="digitar">Genero</label>
                            </div>
                        </div>

                        <div className='part_2'>
                            <div class="digitar">
                                <input name="telefono" type="tel" required></input>
                                <label>Telefono</label>
                            </div>

                            <div class="digitar">
                                <input name="correo" type="email" required></input>
                                <label for="digitar">Email</label>
                            </div>

                            <div class="digitar">
                                <input name="Direccion" type="text" required></input>
                                <label for="digitar">Direccion</label>
                            </div>

                            <div class="digitar">
                                <input name="Confitmar_contraseña" type="password" required></input>
                                <label for="digitar">Confrmar Contraseña</label>
                            </div>
                        </div>
                    </div>

                    <div class="buttom">
                        <div id="input_registrar">
                            <a
                                id="registras_boton" href="/interfaz-login">
                                <input type="submit" value="Registrarse"></input>
                            </a>
                        </div>

                        <div id="link_login">
                            <a class="link_iniciar" href="#">¿Ya tienes cuenta?</a>
                        </div>

                        <div id="link_inicio">
                            <p class="inicio">Volver a <a class="link" href="/">Inicio</a></p>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <img src="" alt="" />
            </div>
        </>
    )
}
