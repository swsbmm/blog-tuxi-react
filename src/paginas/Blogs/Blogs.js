import React from 'react';
import Header from '../../componentes/Header/Header';
import Blogsnews from '../../componentes/Blogsnews/Blogsnews';
import Postcontainer from '../../componentes/Postcontainer/Postcontainer';
import Contact from '../../componentes/Contact/Contact';
import Footer from '../../componentes/Footer/Footer'
import './blogs.css';


const Blogs = () => {
    return(
        <div className="blogs-main">
            <Header/>
            <Blogsnews/>
            <Postcontainer/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Blogs;