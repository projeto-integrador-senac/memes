import React from 'react';
import Link from "next/link";
import styles from '../styles/Menu.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
  } from "@fortawesome/free-solid-svg-icons";
  import  Router  from 'next/dist/client/router';


const Menu = (props) => {

const [iduser, alteraIduser] = React.useState(null)
React.useEffect(() => {
    alteraIduser(localStorage.getItem("iduser"))
}, [])

const deslogaUser = () => {
    localStorage.removeItem("iduser")
    window.location.reload()
}

    return ( 
        <>
            <header style={{
            backgroundColor: props.cor ?? '#2084d8'
        }} className={styles.header}>
       
        <Link href="/"><div className={styles.logo}> <img className={styles.ImgMg}src="/images/icon.ico"/></div></Link>
        
        <input className={styles.sidemenu} type="checkbox" id={styles.sidemenu}/>
        <label className={styles.hamb} for={styles.sidemenu}><span className={styles.hambline}></span></label>
        
        <div className={styles.div}> 
            <input type="text" id={styles.txtBusca} placeholder="Buscar..." />
            <FontAwesomeIcon id={styles.btnBusca} style={{marginLeft: props.margin ?? '790px;'}}  icon={faSearch}/>
         </div>

        <nav className={styles.nav}>
            <ul className={styles.menu}>
                        { iduser ? 
                        <button className={styles.sair} onClick={() => deslogaUser()} >SAIR</button> : 
                        <>
                        <li><Link href="login">Login</Link> </li>
                        <li><b>/</b> </li>
                        <li><Link href="cadastro">Cadastro</Link></li>
                        </>
                        }
            </ul>
        </nav>
    </header>
        </>
     );
}
 
export default Menu;