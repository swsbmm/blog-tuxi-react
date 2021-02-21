import React from 'react';
import './postcontainer.css';
import PostArticle from '../PostArticle/PostArticle'
import img1 from "../../assets/img/blog1.jpg"
import img2 from "../../assets/img/blog2.jpg"
import img3 from "../../assets/img/jesucristo.jpg"
import img4 from "../../assets/img/logo.png"

const postcontainer = () => {

    return (
        <section class="blogs-post-container">
            <div class="grid-container">
                <h3>BLOGS</h3>
                <PostArticle
                    id="1"
                    titulo="Sistemas operativos para aprender y enseñar."
                    descripcion="Desde hace mucho se ha debatido el uso que puede dar un niño o no al momento entrar en el mundo de la tecnología ya sea"
                    img={img1}
                />

                <PostArticle
                    id="2"
                    titulo="¿Qué es GNU-linux?"
                    descripcion="Es un sistema operativo de tipo Unix, lo cual significa que se trata de una colección de muchos programas: aplicaciones, bibliotecas, herramientas de desarrollo"
                    img={img2}
                />

                <PostArticle
                    id="3"
                    titulo="Ventajas del Software Libre."
                    descripcion="El software libre es todo software cuyo código fuente puede ser estudiado, modificado y utilizado libremente con cualquier fin y redistribuido"
                    img={img3}
                />

                <PostArticle
                    id="4"
                    titulo="Invitacion GNUBIES."
                    descripcion="El Grupo Linux de la Universidad Distrital se encarga de generar diversos proyectos que tengan repercusión en la vida universitaria y social de la ciudad; queremos conta"
                    img={img4}
                />

                
                

            </div>
        </section>
    )
}

export default postcontainer;