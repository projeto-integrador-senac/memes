import React, { useEffect } from 'react';
import { useState } from "react";
import styles from '../styles/Usuario.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import Router from 'next/router';


const Usuario = (props) => {


    const [showMe, setShowMe] = useState(false);
     function toggle(){
       setShowMe(!showMe);

       const [perfil, alteraPerfil] = React.useState( [] );
    const axios = require('axios').default;
    

    React.useEffect( () => {
    
        axios.get('http://localhost:3001/perfil')
    
        .then(function (response) {
    
            const profile = response.data;
            alteraPerfil(profile);
            console.log(response)
        })
    
        .catch(function (error) {
            console.log(error);
        }) 
    
      },[] )
     
       
     }

    return ( 
<>
    <div style={{marginTop:  props.margin ?? '-481px'}} >
    <div className={styles.MenuUsuario}>
        <Link href='/'>
        <article  className={styles.voltar}>
            <FontAwesomeIcon className={styles.icon} icon={faArrowLeft} /><p className={styles.p}>Voltar</p>
        </article>
        </Link>

        {perfil == 0 ?
        <p>Carregando....</p>
        :
        <div>
            {perfil.map( u => {
                
                return(
                <>

<div>
            
            <img src='https://pbs.twimg.com/profile_images/1532112034871099392/QGRSRfSh_400x400.jpg'className={styles.FotoUser}/>
            <button className={styles.editar}> EDITAR </button>
        
            </div>
            <br></br>
            <div className={styles.perfil}> 
            <div className={styles.NomeUsuario}>
                <h1>{u.nome}</h1>
                <div className={styles.NomeUser}>
                <p>@{u.nome_usuario}</p>
                </div>
            </div>
            <div className={styles.DescricaoUsuario}>
                <p>descrição</p>
            </div>
            <div className={styles.ButtonBaixo}>
            
            <button onClick={toggle} className={styles.more}>
                <p>Comentários</p>
            </button>
            
            
            <button className={styles.more2}>
                <p>Postagens</p>
            </button>
            
            </div>
            </div>
            <div className={styles.invisivel} class={styles.modal} style={{ display: showMe ? "block" : "none" }} >
            <article className={styles.Comentario}>
            <img src="https://pbs.twimg.com/profile_images/1532112034871099392/QGRSRfSh_400x400.jpg"/>
                
            </article>
        </div>

                </>
                )
            }
            )}
        </div> }

        
    </div>
   
    </div>

</>
     );
}
 
export default Usuario;