import React from 'react';
import styles from '../styles/Usuario.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import TopMemes from "../components/TopMemes";

const Usuario = (props) => {
    return ( 
<>
    <div style={{marginTop:  props.margin ?? '-481px'}} >
    <div className={styles.MenuUsuario}>
        <Link href='/'>
        <article  className={styles.voltar}>
            <FontAwesomeIcon className={styles.icon} icon={faArrowLeft} /><p className={styles.p}>Nome do user</p>
        </article>
        </Link>

        <div >
            <img src='https://pbs.twimg.com/profile_banners/883709719558467584/1595184784/1500x500'className={styles.FotoCapa} />
            <img src='https://pbs.twimg.com/profile_images/1532112034871099392/QGRSRfSh_400x400.jpg'className={styles.FotoUser}/>
        </div>
        <br></br>
        <div className={styles.perfil}> 
        <div className={styles.NomeUsuario}>
            <h1>nome do user</h1>
            <p>@do user</p>
        </div>
        <div className={styles.DescricaoUsuario}>
            <p>descrição</p>
        </div>
        <div className={styles.ButtonBaixo}>
            <Link href='#'>
            <article className={styles.ButtonBaixo1}>
                <p>Comentários</p>
            </article>
            </Link>
            <Link href='#'>
            <article className={styles.ButtonBaixo1}>
                <p>Postagens</p>
            </article>
            </Link>
            <Link href='#'>
            <article className={styles.ButtonBaixo1}>
                <p>Curtidas</p>
            </article>
            </Link>
        </div>
        </div>
        <div className={styles.invisivel}>
            <article className={styles.Comentario}>
            <img src="https://pbs.twimg.com/profile_images/1532112034871099392/QGRSRfSh_400x400.jpg"/>
                <h1 className={styles.ComentaNome}>User</h1>
                <h1 className={styles.ComentaUser}>@user</h1>
                <p className={styles.Comenta}>🔵 Torcida Fiel! ⚪

O Papão da Curuzu está escalado para mais uma vitória, fique ligado nas notícias sobre o nosso Fan Token. Acesse agora o site https://paysandu.foottoken.com e a comunidade do telegram: https://t.me/PaysanduFanTokenNews

@LunesPlatform</p>
            </article>
        </div>
    </div>
    <TopMemes/>
    </div>

</>
     );
}
 
export default Usuario;