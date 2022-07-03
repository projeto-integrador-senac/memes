import React from 'react';
import styles from '../styles/Comentarios.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import MenuLateral from '../components/menuLateral';
import TopMemes from '../components/TopMemes';
import Router from 'next/dist/client/router';
import { useRouter } from 'next/router'
import { useState } from "react";


const Comentarios = () => {

    const router = useRouter()

    const [post, alteraPost] = React.useState([]);
    const [comentario, alteraComentario] = React.useState([]);

    const axios = require('axios').default;


    React.useEffect(() => {

        const id_usuario = router.query.id_usuario;
        console.log(id_usuario)

        axios.get(`http://localhost:3001/comentario/${id_usuario}`)

            .then(function (response) {

                const coments = response.data;
                alteraComentario(coments);
                console.log(response)
            })

            .catch(function (error) {
                console.log(error);
            })

    }, [])


    React.useEffect(() => {

        const id_post = router.query.id_post;
        console.log(id_post)


        axios.get(`http://localhost:3001/post/${id_post}`)

            .then(function (response) {

                const postagem = response.data;
                alteraPost(postagem);
                console.log(response)
            })

            .catch(function (error) {
                console.log(error);
            })

    }, [])


    const cadastraComentario = (C) => {


        p.preventDefault()

        const postacomentario = document.getElementById("inputComentario").value;


        const obj = {
            id_usuario: localStorage.getItem("iduser"),
            id_post: localStorage.getItem("idpost"),// fazer isso 
            texto: postacomentario
        }
        console.log(obj)

        axios.post('http://localhost:3001/coments', obj)

            .then(function (response) {

                console.log(response)
                if (response.data == 0) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Ops!!',
                        text: 'Usuário não cadastrado',
                    })
                } else {
                    localStorage.setItem("idpost", response.data[0].id_post);
                    Router.push(`/comentarios/${id_usuario}`)
                }
                if (postagem.trim == "") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ops!!',
                        text: 'Comentário invalido.',
                    })
                }
            })
    }


    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }


    return (
        <>
            <MenuLateral img='block' />
            <TopMemes />


            <article className={styles.allbrowsers}>
                <Link href="/">
                    <article className={styles.voltar}>
                        <FontAwesomeIcon className={styles.icon} icon={faArrowLeft} ></FontAwesomeIcon> <b>Le Mème</b>
                    </article>
                </Link>

                <div>
                  
                    {comentario == 0
                        ?
                        <div>  
                            {comentario.map(p => {
                                return(
                                    <img className={styles.imagemPost} src={`${p.postagem}`} />
                                )
                            })

                            }
                    
                            {post.map(u => {
                                    return (
                                        <>
                                            <article className={styles.browser}>
                                                <div className={styles.conteudo}>
                                                    <img className={styles.imagem} src={`${u.foto_perfil}`} />
                                                    <a className={styles.nome}>{u.Nome}</a>
                                                    <a className={styles.user}>@{u.UserName}</a>
                                                </div>

                                                <section className={styles.post}>
                                                    <p> {u.descricao} </p>
                                                </section>
                                                <div className={styles.data}>
                                                    <p>{u.feito_em}</p>
                                                </div>
                                                <hr className={styles.hr} />
                                                <div className={styles.numerosPost}>
                                                    <h5>600.000</h5>
                                                    <p>Curtidas</p>
                                                </div>
                                                <hr className={styles.hr} />
                                                <form onSubmit={(C) => cadastraComentario(C)} >
                                                    <input id="inputComentario" placeholder="Digite seu comentário" />
                                                    <div>
                                                        <button type='submit' > Comentar </button>
                                                        <button onClick={toggle}> Voltar </button>
                                                    </div>
                                                </form>
                                            </article>


                                        </>
                                    )

                            })
                            }


                        </div>
                        :
                        <div>
                            {comentario.map(c => {
                                // if (u.ID == c.ID){

                                return (
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
                                            <div className={styles.data}>
                                                <p>{c.feito_em}</p>
                                            </div>
                                            <hr className={styles.hr} />
                                            <div className={styles.numerosPost}>
                                                <h5>600.000</h5>
                                                <p>Curtidas</p>
                                            </div>
                                            <hr className={styles.hr} />
                                            <div>
                                                <div className={styles.conteudo}>
                                                    <img className={styles.imagem} src={`${c.foto_perfil}`} />
                                                    <a className={styles.nome}>{c.nome}</a>
                                                    <a className={styles.user}>{c.nome_usuario}</a>
                                                </div>
                                                <div>
                                                    <p>{c.comentario}</p>
                                                    <p>{c.data_comentario}</p>
                                                </div>
                                            </div>
                                            <form onSubmit={(C) => cadastraComentario(C)} >
                                                <input id="inputComentario" placeholder="Digite seu comentário" />
                                                <div>
                                                    <button type='submit' > Comentar </button>
                                                    <button onClick={toggle}> Voltar </button>
                                                </div>
                                            </form>
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
