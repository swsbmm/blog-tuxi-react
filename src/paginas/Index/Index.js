import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../componentes/Header/Header';
import './index.css';

function Index() {
    return <div className="index">
      <Header/>
      <main className="home-main">
        <div className="home-main-conteiner">
            <div className="home-main-title">
                <h1>Conoce las novedades y noticias del mundo del Software Libre.</h1>
            </div>
            <div className="home-main-button">
                <button>
                    <Link to="/blogs">Entra Yaa!</Link>
                </button>
            </div>
        </div>
      </main>
    </div>;
  }
  
  export default Index;