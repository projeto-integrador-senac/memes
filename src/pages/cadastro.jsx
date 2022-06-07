import React from 'react';
import { useState } from "react";
import Link from 'next/link';
import styles from '../styles/Cadastro.module.css'
import Menu from '../components/menu';


const Cadastro = () => {

  const [nome, setNome] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  
  
    return (

      <>
      <Menu cor="#b721ff" cor2="#b721ff"/>
     <div>
         <div className={styles.Container}>
      <div className={styles.Containerlogin}>
        <div className={styles.Wraplogin}>
        <span className={styles.Imagem}>
          <p>CADASTRE-SE AGORA MESMO NA MAIOR COMUNIDADE DE CRIADORES DE MEMES</p>
             <img className={styles.fds} src="/images/pintor.svg" />
          </span> 
          <form className={styles.Looginform}>
        
            <span className={styles.loginformtitle}> Cadastre-se </span>

           <br></br>

            <div className={styles.wrapinput}>
              <input
                className={nome !== "" ? "has-val input" : styles.input}
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <span className={styles.Focusinput} data-placeholder="Seu nome"></span>
            </div>

            <div className={styles.wrapinput}>
              <input
                className={user !== "" ? "has-val input" : styles.input}
                type="email"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <span className={styles.Focusinput} data-placeholder="Nome de Usuario"></span>
            </div>

            <div className={styles.wrapinput}>
              <input
                className={password !== "" ? "has-val input" : styles.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={styles.Focusinput} data-placeholder="Senha"></span>
            </div>

            <div className={styles.wrapinput}>
              <input
                className={password !== "" ? "has-val input" : styles.input}
                type="password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
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