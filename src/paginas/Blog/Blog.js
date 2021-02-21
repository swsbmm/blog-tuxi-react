import React from 'react';
import Header from '../../componentes/Header/Header';
import Blogsnews from '../../componentes/Blogsnews/Blogsnews';
import Postcontainer from '../../componentes/Postcontainer/Postcontainer';
import Contact from '../../componentes/Contact/Contact';
import Footer from '../../componentes/Footer/Footer'
import './blog.css';


const Blog = () => {
    return(
        <div className="blogs-main">
            <Header/>
            
            <section class="blogpost-main-container">
            <div class="grid-container">
                <h3>¿Quieres conocer mas?</h3>
                <article>
                    <img class="width100" src="/assets/img/INVITACIÓN GNUBIES.png" alt=""/>
                </article>
            </div>    
            </section>

            <Footer/>
        </div>
    )
}

export default Blog;