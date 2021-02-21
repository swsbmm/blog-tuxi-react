import React from 'react';
import './blogsnew.css';
import BlogButton from '../BlogButton/BlogButton'

const Blogsnews = (props) => {
    const {titulo} = props
    const {descripcion} = props
    const {img} = props

    return (
        <section className="blogs-news-container">
            <div className="grid-container blogs-main-new">
                <h3>Destacado</h3>
                <div className="blogs-news-img-container">
                    <img src="" alt=""/>
                </div>
                <div className="blogs-news-info-container">
                    <h2>{titulo}</h2>
                    <p>{descripcion}</p>
                    <BlogButton url="/blog"/>
                </div>
            </div>
        </section>
    )
}

export default Blogsnews;