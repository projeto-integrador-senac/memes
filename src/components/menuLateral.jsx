import React from 'react';
import { useState } from "react";
import Link from 'next/dist/client/link';
import { home, explore, bookmarks, lists, profile, more, messages } from '../pages/api/icons_teste'
import styles from '../styles/MenuLateral.module.scss'
import Postagem from './postagem';
import Swal from 'sweetalert2';
import  Router  from 'next/dist/client/router';

const MenuLateral = (props) => {

  //props useStates no index para mostrar postagem

  const [iduser, alteraIduser] = React.useState(null)
    React.useEffect(() => {
    alteraIduser(localStorage.getItem("iduser"))
  }, [])

  const Postagem = () => {

    //document.querySelector(".modal").style.display = "block"

  }

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

          <Link href="/museu" activeClassName={styles.selected}>
          <button className="more">
            <span>{lists} História dos Memes</span>
          </button>
          </Link>
          
          <Link href="/criadores" activeClassName={styles.selected}>
          <button className="more">
            <span>{more} Criadores</span>
          </button>
          </Link>



          <button onClick={() => iduser ? Router.push('/galeria') : Swal.fire({text: "crie uma conta ou faça login para continuar.", footer: "<a href='/login'> Já possui uma conta? </a>"}) } >
            <span>{bookmarks} Galeria</span>
          </button>
        
          
         
          <button onClick={() => iduser ? Router.push('/perfil') : Swal.fire({text: "crie uma conta ou faça login para continuar.", footer: "<a href='/login'> Já possui uma conta? </a>"}) }>
            <span>{profile} Perfil</span>
        </button>
          
          
         
         
        </nav>
        
        
      {iduser ?
        <button  onClick={Postagem} className={styles.tweet}>Postar</button>
      :
      <button className={styles.tweet} onClick={ () => Swal.fire({text: "crie uma conta ou faça login para continuar.", footer: "<a href='/login'> Já possui uma conta? </a>"})}  >Postar</button>
      }
        

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