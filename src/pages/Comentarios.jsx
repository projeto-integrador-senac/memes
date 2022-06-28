import React from 'react';
import styles from '../styles/Comentarios.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import MenuLateral from '../components/menuLateral';
import TopMemes from '../components/TopMemes';

import { useRouter } from 'next/router'


const Comentarios = () => {

  const router = useRouter()

  const [comentario, alteraComentario] = React.useState( [] );
  const axios = require('axios').default;


  React.useEffect( () => {

    const id_usuario = router.query.id_usuario;
    console.log(id_usuario)

    axios.get('http://localhost:3001/comentario/1')

    .then(function (response) {

        const coments = response.data;
        alteraComentario(coments);
        console.log(response)
    })

    .catch(function (error) {
        console.log(error);
    }) 

  },[] )


  return ( 
    <>
      <MenuLateral img='block' />
      <TopMemes/>


    <article className={styles.allbrowsers}>
          <Link href="/">
            <article className={styles.voltar}>
              <FontAwesomeIcon className={styles.icon} icon={faArrowLeft} ></FontAwesomeIcon> <b>Le Mème</b>
            </article>
          </Link>

    <div>
      {comentario == 0 
        ?
      <p> Carregando... </p>  
        :
      <div>
        {comentario.map( c => {
            // if (u.ID == c.ID){
               
            return(
                  <>       
                      <article className={styles.browser}>
                            <div className={styles.conteudo}>
                                  <img className={styles.imagem} src={`${c.foto_perfil}`} />
                                  <a className={styles.nome}>{c.nomepost}</a>
                                  <a className={styles.user}>{c.nikipost}</a>
                            </div>

                            <section className={styles.post}>
                              <p> {c.descricao} </p>
                            </section>
                              <img className={styles.imagemPost} src={`${c.postagem}`}/>
                              <div className={styles.data}>
                              <p>{c.feito_em}</p>
                              </div>
                              <hr className={styles.hr} />
                                <div className={styles.numerosPost}>
                                  <h5>600.000</h5>
                                  <p>Curtidas</p>
                                </div>
                              <hr className={styles.hr} /> 
                      </article>
                  </>
     )
                        
                    })}
                </div>
            }
            </div>
</article>
    </>
    );
}
 
export default Comentarios;
