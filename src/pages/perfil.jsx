import React from 'react';
import { useState } from "react";
import Usuario from '../components/usuario';
import Link from 'next/dist/client/link';
import { home, explore, bookmarks, lists, profile, more } from './api/icons_teste'
import styles from '../styles/Perfil.module.scss'

const LeftPane = () => {
  return (
    <div className={styles.leftpane}>
      <div className={styles.container}>
        <header><Link href="/"><img className={styles.ImgMg}src="/images/icon.ico"/></Link></header>

        <nav>
          <Link href="/" activeClassName={styles.selected}>
          <button className="more">
            <span>{home} Inicio</span>
            </button>
          </Link>
          <Link href="/explore" activeClassName={styles.selected}>
          <button className="more">
            <span>{explore} Top Memes</span>
            </button>
          </Link>
          <Link href="/galeria" activeClassName={styles.selected}>
          <button className="more">
            <span>{bookmarks} Galeria</span>
            </button>
          </Link>
          <Link href="/lists" activeClassName={styles.selected}>
          <button className="more">
            <span>{lists} Museu dos Memes</span>
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
        
        <Usuario/>

        </nav>
      </div>
    </div>
  )
}

export default LeftPane