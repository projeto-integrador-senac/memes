import React from 'react';
import { useState } from "react";
import Link from 'next/dist/client/link';
import { home, explore, bookmarks, lists, profile, more, messages } from '../pages/api/icons_teste'
import styles from '../styles/MenuLateral.module.scss'
import Postagem from './postagem';

const MenuLateral = (props) => {
  return (
    <div className={styles.leftpane}>
      <div className={styles.container}>
      <header style={{display: props.img ?? 'none'}} ><Link href="/"><img className={styles.ImgMg}src="/images/icon.ico"/></Link></header>

        <nav>
          <Link href="/" activeClassName={styles.selected}>
          <button className="more">
            <span>{home} Inicio</span>
            </button>
          </Link>
          <Link href="/galeria" activeClassName={styles.selected}>
          <button className="more">
            <span>{bookmarks} Galeria</span>
            </button>
          </Link>
          <Link href="/museu" activeClassName={styles.selected}>
          <button className="more">
            <span>{lists} História dos Memes</span>
          </button>
          </Link>
          <Link href="/perfil" activeClassName={styles.selected}>
          <button className="more">
            <span>{profile} Perfil</span>
        </button>
          </Link>
          <Link href="/criadores" activeClassName={styles.selected}>
          <button className="more">
            <span>{more} Criadores</span>
          </button>
          </Link>
        </nav>
        
        

        <button onClick={Postagem} className={styles.tweet}>Postar</button>
        

        <Postagem/>

        <div className={styles.RodaPe}>
          <a>
            © 2022 Meme's Gallerry, Inc.
            <br></br>
            |API | Idioma:Português (Brasil)          
          </a>  
        </div> 
        
      </div>
      
    </div>
    
  )
}

export default MenuLateral;