import React from 'react';
import styles from '../styles/Comentarios.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const Comentarios = () => {
    return ( 
    <>
<article className={styles.allbrowsers}>
          <Link href="/">
            <article className={styles.voltar}>
              <FontAwesomeIcon className={styles.icon} icon={faArrowLeft} ></FontAwesomeIcon> <b>Le Mème</b>
            </article>
          </Link>

            
     <article className={styles.browser}>
          <div className={styles.conteudo}>
                <img className={styles.imagem} src="https://pbs.twimg.com/profile_images/1431468925221548033/aWsY_pI2_400x400.jpg" />
                <a className={styles.nome}>Punheta do Futvoli</a>
                <a className={styles.user}>@futvoli_info</a>
          </div>

          <section className={styles.post}>
            <p>
            ⚫️⚪️ | O estudante de informatica Murilo Augusto (<a className={styles.link} href='https://twitter.com/murilosccp_'>@murilosccp_</a>)
             sofreu um AVC por programar demais.
             "Os colegas eram vagabundos demais" disse o estudante em seus ultimos instantes de vida

            📰 | <a className={styles.link} href='https://twitter.com/futvoli_info'>@futvoli_info</a>
            </p>
          </section>
            <img className={styles.imagemPost} src="https://pbs.twimg.com/media/FU2GuhJX0Awtkl4?format=jpg&name=small" />
            <div className={styles.data}>
            <p>9:01 PM · 9 de jun de 2022</p>
            </div>
            <hr className={styles.hr} />
              <div className={styles.numerosPost}>
                <h5>600.000</h5>
                <p>Curtidas</p>
              </div>
            <hr className={styles.hr} />
     </article>
</article>
    </>
    );
}
 
export default Comentarios;
