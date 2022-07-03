import React from 'react';
import { useState } from "react";
import Link from 'next/dist/client/link';
import { home, explore, bookmarks, lists, profile, more, messages } from '../pages/api/icons_teste'
import styles from '../styles/MenuLateral.module.scss'
import Swal from 'sweetalert2';
import Router from 'next/dist/client/router';

const MenuLateral = (props) => {

  //props useStates no index para mostrar postagem

  const [iduser, alteraIduser] = React.useState(null)
  React.useEffect(() => {
    alteraIduser(localStorage.getItem("iduser"))
  }, [])


  const axios = require('axios').default;

  const cadastroPostagem = (p) => {


    p.preventDefault()

    const descricao = document.getElementById("inputDescricao").value;
    const postagem = document.getElementById("inputMeme").value;

    const obj = {
      id_usuario: localStorage.getItem("iduser"),
      descricao: descricao,
      postagem: postagem
    }


    console.log(obj)

    axios.post('http://localhost:3001/postagem', obj)

      .then(function (response) {

        console.log(response)
        if (response.data == 0) {

          Swal.fire({
            icon: 'error',
            title: 'Ops!!',
            text: 'Usuário não cadastrado',
          })
        } else {
          Router.push('/')
        }
        if (postagem.trim == "") {
          Swal.fire({
            icon: 'error',
            title: 'Ops!!',
            text: 'Postagem não cadastrada.',
          })
        }
      })



  }








  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <div className={styles.leftpane}>
      <div className={styles.container}>
        <header style={{ display: props.img ?? 'none' }} ><Link href="/"><img className={styles.ImgMg} src="/images/icon.ico" /></Link></header>

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



          <button onClick={() => iduser ? Router.push('/galeria') : Swal.fire({ icon: 'warning', text: "crie uma conta ou faça login para continuar.", footer: "<a href='/login'> Já possui uma conta? </a>" })} >
            <span>{bookmarks} Galeria</span>
          </button>



          <button onClick={() => iduser ? Router.push('/perfil') : Swal.fire({ icon: 'warning', text: "crie uma conta ou faça login para continuar.", footer: "<a href='/login'> Já possui uma conta? </a>" })}>
            <span>{profile} Perfil</span>
          </button>




        </nav>


        {iduser ?
          <button onClick={toggle} className={styles.tweet}>Postar</button>
          :
          <button className={styles.tweet} onClick={() => Swal.fire({ icon: 'warning', text: "crie uma conta ou faça login para continuar.", footer: "<a href='/login'> Já possui uma conta? </a>" })}  >Postar</button>
        }


        <div className={styles.RodaPe}>
          <a>
            © 2022 Meme's Gallerry, Inc.
            <br></br>
            |API | Idioma:Português (Brasil)
          </a>
        </div>

      </div>

      <div class={styles.modal} style={{ display: showMe ? "block" : "none" }} >
        Poste Um Meme
        <form onSubmit={(p) => cadastroPostagem(p)}>
          <input id="inputDescricao" placeholder="Descrição" />

          <input id="inputMeme" placeholder="URL do MEME" />

          <div >
            <button type='submit' className={styles.salvar}  >SALVAR</button>
            <button className={styles.cancela} id="inputSair" onClick={toggle} >VOLTAR</button>
          </div>

        </form>
      </div>



    </div>

  )
}

export default MenuLateral;