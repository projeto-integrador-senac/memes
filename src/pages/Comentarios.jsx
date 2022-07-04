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

    const [post, alteraPost] = React.useState(null);
    const [comentario, alteraComentario] = React.useState([]);

    const axios = require('axios').default;

    
    const buscaPostagem = ( id_post ) => {

        axios.get(`http://localhost:3001/post/${id_post}`)
        .then(function (response) {

            const postagem = response.data;
            alteraPost(postagem[0]);
            
        })

        .catch(function (error) {
            console.log("DEU ERRO MANO")
            console.log(error);
        })

    }

    const buscaComentarios = ( id_post ) => {

        axios.get(`http://localhost:3001/comentario/${id_post}`)
        .then(function (response) {

            const coments = response.data;
            console.log(coments) 

            alteraComentario(coments);

        })

        .catch(function (error) {
            console.log(error);
        })

    }


    React.useEffect(() => {

        const id_post = router.query.id_post;
        
        buscaPostagem(id_post);
        buscaComentarios(id_post);

    }, [])



    const cadastraComentario = (C) => {

        C.preventDefault()

        const id_post = router.query.id_post;
        const postacomentario = document.getElementById("inputComentario").value;


        const obj = {
            id_usuario: localStorage.getItem("iduser"),
            id_post: id_post,
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
                    buscaComentarios(id_post);
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
                    
                    { 
                        post 
                        ?
                            <div>  
                                        
                                <article className={styles.browser}>
                                    <div className={styles.conteudo}>
                                        <img className={styles.imagem} src={`${post.foto_perfil}`} />
                                        <a className={styles.nome}>{post.Nome}</a>
                                        <a className={styles.user}>@{post.UserName}</a>
                                    </div>

                                    <section className={styles.post}>
                                        <p> {post.descricao} </p>
                                        <img className={styles.imagemPost} src={`${post.PUBLICACAO}`} />
                                    </section>
                                    <div className={styles.data}>
                                        <p>{post.feito_em}</p>
                                    </div>
                                    <hr className={styles.hr} />
                                    <div className={styles.numerosPost}>
                                        <h5>600.000</h5>
                                        <p>Curtidas</p>
                                    </div>
                                    <hr className={styles.hr} />
                                    <form onSubmit={(C) => cadastraComentario(C)} >
                                        <input required  id="inputComentario" placeholder="Digite seu comentário" />
                                        <div>
                                            <button > Comentar </button>
                                        </div>
                                    </form>
                                </article>

                            </div>
                        :
                        <p>Carregando...</p>
                    }
                        

                    {
                        comentario == 0
                        ?
                        <p> Essa publicação não possui comentários. </p>
                        :
                    
                        <div>
                            {comentario.map(c => {
                                return (
                                    <article>
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
                                    </article>
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
