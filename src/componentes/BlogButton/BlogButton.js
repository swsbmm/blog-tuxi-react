import React from 'react';
import './blogButton.css';
import { Link } from 'react-router-dom'

const BlogButton = (props) => {
    const {url} = props
    return (
        <Link to={url} class="blogs-button">Leer mas</Link>
    )
}

export default BlogButton;