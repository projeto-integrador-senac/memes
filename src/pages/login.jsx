import React from 'react';
import { useState } from "react";
import Link from 'next/dist/client/link';
import styles from '../styles/Login.module.css'
import Menu from '../components/menu';


const Login = (props) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
      <>
      <Menu cor="#299cb6" cor2="#299cb6" />
        <div className={styles.container}>
        <div className={styles.containerlogin}>
          <div className={styles.wraplogin}>
          <span className={styles.imagem}>
            <p>ENTRE E FAÇA MAIS "MEMES" MAIS OBRAS DE ARTE</p>
               <img className={styles.fdss} src="/images/pintora.svg" />
            </span> 
            <form className={styles.loginform}>
              <span className={styles.loginformtitle}> Bem vindo </span>
  
             <br></br>
  
              <div className={styles.wrapinput}>
                <input
                  className={email !== "" ? "has-val input" : styles.input}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className={styles.focusinput} data-placeholder="Email ou User"></span>
              </div>
  
              <div className={styles.wrapinput}>
                <input
                  className={password !== "" ? "has-val input" : styles.input}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className={styles.focusinput} data-placeholder="Senha"></span>
              </div>
  
              <div className={styles.containerloginformbtn}>
                <button className={styles.loginformbtn}>Login</button>
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