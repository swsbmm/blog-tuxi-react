import React from 'react';
import './contact.css';
import favorito from "../../assets/icons/favorito.png"
import correo from "../../assets/icons/correo (1).png"

const Contact = () => {

    return (
        <section class="contact-main-container">
            <div>
                <img src={correo} alt=""/>
                <div class="contact-left">
                    <a href="">Contacto</a>
                    <p>GLUD@UDISTRITAL.EDU.CO</p>
                </div>
            </div>
            <div>
                <img src={favorito} alt=""/>
                <div class="contact-right">
                    <a href="">Escribe</a>
                    <p>Buscanos en nuestras redes sociales @GLUD.UD</p>
                </div>
            </div>
        </section>
    )
}

export default Contact;