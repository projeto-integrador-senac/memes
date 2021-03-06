import React from 'react';
import { useState } from "react";
import Usuario from '../components/usuario';
import Link from 'next/dist/client/link';
import { home, explore, bookmarks, lists, profile, more } from './api/icons_teste'
import styles from '../styles/Perfil.module.scss'
import TopMemes from '../components/TopMemes';

const LeftPane = () => {
  return (
    <div className={styles.leftpane}>
      <div className={styles.container}>

      <TopMemes margin='20px'/>

        <header><Link href="/"><img className={styles.ImgMg}src="/images/icon.ico"/></Link></header>
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
            <span>{lists} Museu dos Memes</span>
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

        <Link href="/postagem" activeClassName={styles.selected}>
        <button className={styles.tweet}>Postar</button>
        </Link>

        <Usuario/>
        

        <div className={styles.RodaPe}>
          <a>
            © 2022 Meme's Gallerry, Inc.
            <br></br>
            |API | Idioma:Português (Brasil)          
          </a>  
        </div>

        </nav>
      </div>
    </div>
  )
}

export default LeftPane