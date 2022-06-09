import React from 'react';
import styles from '../styles/Comentarios.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const Comentarios = () => {
    return ( 
    <div >
        <article className={styles.allbrowsers}>
<article className={styles.voltar}>
  <h1>Voltar</h1>
</article>  
  <article className={styles.browser}>
	<div className={styles.conteudo}>
  <img className={styles.imagem} src="https://pbs.twimg.com/profile_images/1518062210618171392/aw_TLDkC_400x400.jpg" />
    <a className={styles.aa}>SCCP News</a>
    <a className={styles.user}>@_sccpnews</a>
  </div>
    
    <section className={styles.post}>
      <p>
        ⚫️⚪️ | O delegado Roberto Sahagoff confirmou que vai indiciar o Rafael Ramos por injúria racial 	contra Edenilson, até a próxima segunda-feira, mesmo com o laudo da perícia inconclusivo.
        
📰 | @sbt_sports</p>
    </section>
<img className={styles.imagemPost} src="https://pbs.twimg.com/media/FU02h3dWQAAb8EG?format=jpg&name=small" />
  </article>
  
</article>
    </div>
    );
}
 
export default Comentarios;
