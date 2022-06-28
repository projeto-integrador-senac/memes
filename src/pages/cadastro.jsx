import React from 'react';
import { useState } from "react";
import Link from 'next/link';
import styles from '../styles/Cadastro.module.scss'
import Menu from '../components/menu';


const Cadastro = () => {

  const axios = require('axios').default;



   const cadastroUsuario = (c) => {

        c.preventDefault()

        const nome = document.getElementById("inputNome").value;
        const nome_usuario = document.getElementById("inputNickName").value;
        const senha = document.getElementById("inputSenha").value;
        const confirmaSenha = document.getElementById("inputConfirma").value;
        
        const obj = {
            nome: nome,
            nome_usuario : nome_usuario,
            senha : senha
        }

        if(obj.nome.trim() == " "){
            alert("Nome não cadastrado.")
            
        }
        if(obj.nome_usuario.trim() == ""){
            alert("Nome usuario não cadastrado.")
            
        }
        
        if(obj.senha.trim() == ""){
            alert("Senha não cadastrada")
            
        }
        if(confirmaSenha.trim() == "" ){
            alert("Senha não confirmada!")
            
        }
        if(confirmaSenha.trim() != obj.senha.trim()){
            alert("Senha confirmada incorreta!")
            
        }

        axios.post('http://localhost:3001/usuario', obj)

        .then(function (response) {

            //console.log(response.status == 200)

alert("cadastro feito com sucesso")

        })

        .catch(function (error) {

alert("nome de usuario já existente")

        })  
      }
  
    return (

    <>
        <Menu cor="#b721ff" cor2="#b721ff" margin="-20px"/>
      <div>
            <div className={styles.Container}>
          <div className={styles.Containerlogin}>
            <div className={styles.Wraplogin}>
            <span className={styles.Imagem}>
              <p>CADASTRE-SE AGORA MESMO </p>
                <img className={styles.fds} src="/images/pintor.svg" />
              </span> 
              <form  className={styles.Looginform} onSubmit={(c) => cadastroUsuario(c)}>
            
                <span className={styles.loginformtitle}> Cadastre-se </span>

              <br></br>

                <div className={styles.wrapinput}>
                  <input
                    className={styles.input}
                    type="text"
                    id="inputNome"
                  />
                  <span className={styles.Focusinput} data-placeholder="Nome"></span>
                </div>

                <div className={styles.wrapinput}>
                  <input
                    className={styles.input}
                    type="text"
                    id="inputNickName"
                  />
                  <span className={styles.Focusinput} data-placeholder="Nome de Usuario"></span>
                </div>

                <div className={styles.wrapinput}>
                  <input
                    className={styles.input}
                    type="password"
                    id="inputSenha"
                  />
                  <span className={styles.Focusinput} data-placeholder="Senha"></span>
                </div>

                <div className={styles.wrapinput}>
                  <input
                    className={styles.input}
                    type="password"
                    id="inputConfirma"
                  />
                  <span className={styles.Focusinput} data-placeholder={"Confirme sua senha"}></span>
                </div>

                <div className={styles.Containerloginformbtn}>
                  <button className={styles.Loginformbtn}>Criar Conta!</button>
                </div>

                <div className={styles.Textcenter}>
                  <span className={styles.Txt1}>Já possui uma conta? </span>
                  <Link href="/login" >
                  <div className={styles.Txt2}>
                      Login
                  </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    );

} 
export default Cadastro;