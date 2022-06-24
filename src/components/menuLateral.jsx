import React from 'react';
import { useState } from "react";
import Link from 'next/dist/client/link';
import { home, explore, bookmarks, lists, profile, more } from '../pages/api/icons_teste'
import styles from '../styles/MenuLateral.module.scss'

const MenuLateral = () => {
  return (
    <div className={styles.leftpane}>
      <div className={styles.container}>
        

        <nav>
          <Link href="/" activeClassName={styles.selected}>
          <button className="more">
            <span>{home} Inicio</span>
            </button>
          </Link>
          <Link href="/#" activeClassName={styles.selected}>
          <button className="more">
            <span>{explore} Top Memes</span>
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
          <button className="more">
            <span>{more} Criadores</span>
          </button>
        
        
        </nav>

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