import React from 'react';
import styles from '../styles/Usuario.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"

const Usuario = () => {
    return ( 
    <div className={styles.Menu}>
        <div className={styles.MenuUsuario}>
            <div className={styles.ButtonAlto} >
                <button> <FontAwesomeIcon icon={faArrowLeft}/> </button>
                <p>Nome do user</p>
            </div> 
            <div>
                <img src='https://pbs.twimg.com/profile_banners/883709719558467584/1595184784/1500x500'className={styles.FotoCapa} />
                <img src='https://pbs.twimg.com/profile_images/1532112034871099392/QGRSRfSh_400x400.jpg'className={styles.FotoUser}/>
            </div>
            <br></br>
            <div className={styles.NomeUsuario}>
                <h1>nome do user</h1>
                <p>@do user</p>
            </div>
            <div className={styles.DescricaoUsuario}>
                <p>descrição</p>
            </div>
            <div className={styles.butao}>
                <div className={styles.button}>
                    <button className={styles.button}>Coleção p</button>
                </div>
                <div className={styles.button}>
                    <button className={styles.button}>Postagem</button>
                </div>
                <div className={styles.button}>
                    <button className={styles.button}>Curtidos</button>
                </div>
                <div className={styles.button}>
                    <button className={styles.button}>Comentátios feitos pelo user</button>
                </div>
            </div>
        </div>
       
    </div>
     );
}
 
export default Usuario;