import React from 'react';
import { useState, useEffect } from "react";
import Link from 'next/dist/client/link';
import styles from '../styles/Login.module.scss'
import Menu from '../components/menu';
import Swal from 'sweetalert2';
import  Router  from 'next/dist/client/router';


const Login = (props) => {

  const axios = require('axios').default;
  


  const autenticaUsuario = (e) => {

    e.preventDefault()

    const nome_usuario = document.getElementById("inputNickName").value;
    const senha = document.getElementById("inputSenha").value;
    
    const obj = {
        nome_usuario : nome_usuario,
        senha : senha
    }

    /*if(obj.nome_usuario.trim() == "" && obj.senha.trim() == ""){alert("Nome ou senha incorreto.")}*/

    axios.post('http://localhost:3001/autentica', obj)

    .then(function (response) {

        console.log(response)
        if(response.data == 0){

          Swal.fire({
            icon: 'error',
            title: 'Ops!!',
            text: 'Usuário ou senha incorreto',
          })
        } else{
            localStorage.setItem("iduser",response.data[0].id_usuario);
            Router.push('/')
           }

          

    })

    .catch(function (error) {

      Swal.fire({
        icon: 'error',
        title: 'Opa!!',
        text: 'Usuário ou senha não encontrados',
      })

    })  
  }


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
      <>
      <Menu cor="#299cb6" cor2="#299cb6" margin="-20px"/>
        <div className={styles.container}>
        <div className={styles.containerlogin}>
          <div className={styles.wraplogin}>
          <span className={styles.imagem}>
            <p>ENTRE E FAÇA MAIS "MEMES" MAIS OBRAS DE ARTE</p>
               <img className={styles.fdss} src="/images/pintora.svg"/>
            </span> 
            <form className={styles.loginform} onSubmit={(e) => autenticaUsuario(e)}>
              <span className={styles.loginformtitle}> Bem vindo </span>
  
             <br></br>
  
              <div className={styles.wrapinput}>
                <input
                  className={styles.input}
                  type="text"
                  id='inputNickName'
                />
                <span className={styles.focusinput} data-placeholder="Nome de Usuário"></span>
              </div>
  
              <div className={styles.wrapinput}>
                <input
                  className={styles.input}
                  type="password"
                  id='inputSenha'
                />
                <span className={styles.focusinput} data-placeholder="Senha"></span>
              </div>
  
              <div className={styles.containerloginformbtn}>
                <button  className={styles.loginformbtn}>Login</button>
              </div>
  
              <div className={styles.textcenter}>
                <span className={styles.txt1}>Não possui conta? </span>
                <Link href="/cadastro" >
                  <div className={styles.txt2}>
                  Criar conta
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </> 
     );
}
 
export default Login;