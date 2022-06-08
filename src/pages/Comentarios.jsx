import React from 'react';
import styles from '../styles/Comentarios.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"

const Comentarios = () => {
    return ( 
    <div className={styles.MenuFeed}>
        <div>
            <div>
                <button> <FontAwesomeIcon icon={faArrowLeft}/> </button>
                <div>
                    <img src='https://pbs.twimg.com/profile_images/1532112034871099392/QGRSRfSh_400x400.jpg' className={styles.FotoCapa1}/>
                </div>
                <p>Nome do user</p>
            </div> 
            <p>comentário do proprietário </p>
        </div>
        <div>
            <img src='https://i.em.com.br/RWp3rirEmujT4if9HsjRMJfj1d0=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/02/27/1348761/putin-alimenta-cachorro-com-a-cara-de-bolsonaro_1_38500.jpg' className={styles.FotoMeme1} />
        </div>
    </div>
    );
}
 
export default Comentarios;
