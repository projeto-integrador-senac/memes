import React, { useEffect } from 'react';
import { useState } from "react";
import styles from '../styles/Usuario.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Router from 'next/router';
import Post from '../components/post'


const Usuario = (props) => {

    const [usuario, mostraPerfil] = React.useState(null);
    const [postagens, postagemUsuario] = React.useState([]);



    const mostraUsuario = (id_usuario) => {

        const axios = require('axios').default;
        axios.get(`http://localhost:3001/perfil/usuario/${id_usuario}`)


            .then(function (response) {

                const profile = response.data;
                //console.log(response);
                mostraPerfil(profile[0]);

            })

            .catch(function (error) {
                console.log(error);
            })

    }

    const mostraPostagem = (id_usuario) => {

        const axios = require('axios').default;
        axios.get(`http://localhost:3001/perfil/postagem/${id_usuario}`)


            .then(function (response) {

                const profile = response.data;
                console.log(response);
                postagemUsuario(profile);

            })

            .catch(function (error) {
                console.log(error);
            })

    }

    React.useEffect(() => {

        const id_usuario = localStorage.getItem("iduser");

        mostraUsuario(id_usuario);

        mostraPostagem(id_usuario);

    }, [])

    return (
        <>
            <div style={{ marginTop: props.margin ?? '-481px' }} >



                {usuario == null
                    ?
                    <p>loading...</p>
                    :


                    <div>
                        <div className={styles.MenuUsuario}>
                            <Link href='/'>
                                <article className={styles.voltar}>
                                    <FontAwesomeIcon className={styles.icon} icon={faArrowLeft} /><p className={styles.p}>Voltar</p>
                                </article>
                            </Link>
                            <img src={`${usuario.foto_perfil}`} className={styles.FotoUser} />
                            <button className={styles.editar}> EDITAR </button>
                        </div>

                        <br></br>
                        <div className={styles.perfil}>
                            <div className={styles.NomeUsuario}>
                                <h1>{usuario.nome}</h1>
                                <div className={styles.NomeUser}>
                                    <p>{usuario.nome_usuario}</p>
                                </div>
                            </div>
                            <div className={styles.DescricaoUsuario}>
                                <p>{usuario.descricao}</p>
                            </div>
                        </div>
                    </div>
                }

                <p>Postagens</p>

                <div className={styles.invisivel} class={styles.modal}  >
                    <article className={styles.Comentario}>
                        {postagens == 0
                            ?
                            <p>Poste alguma coisa</p>
                            :
                            postagens.map(u => {
                                return (

                                    <Link href={{ pathname: "/comentarios/", query: { id_post: u.id_post } }}>

                                        <img src={`${u.postagem}`} />
                                    </Link>

                                )
                            })}


                    </article>
                </div>




            </div>



        </>
    );
}

export default Usuario;