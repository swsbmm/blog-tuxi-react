import React from 'react';
import './postArticle.css';
import BlogButton from '../BlogButton/BlogButton';


const PostArticle = (props) => {
    const {img} = props
    const {titulo} = props
    const {descripcion} = props
    const {id} = props
    console.log("../../assets/img/"+img)
    return (
        <article class="post-container">
                    <img src={img} alt=""/>
                    <h4>{titulo}</h4>
                    <p>{descripcion}...</p>
                    <BlogButton url={"../../assets/img/"+id}/>
        </article>
    )
}

export default PostArticle;