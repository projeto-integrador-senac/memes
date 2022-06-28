import React from 'react';
import Link from "next/link";
import styles from '../styles/Menu.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
  } from "@fortawesome/free-solid-svg-icons";


const Menu = (props) => {
    return ( 
        <>
            <header style={{
            backgroundColor: props.cor ?? '#bc67e0'
        }} className={styles.header}>
       
        <Link href="/"><div className={styles.logo}> <img className={styles.ImgMg}src="/images/icon.ico"/></div></Link>
        
        <input className={styles.sidemenu} type="checkbox" id={styles.sidemenu}/>
        <label className={styles.hamb} for={styles.sidemenu}><span className={styles.hambline}></span></label>
        
        <div className={styles.div}> 
            <input type="text" id={styles.txtBusca} placeholder="Buscar..." />
            <FontAwesomeIcon id={styles.btnBusca} style={{marginLeft: props.margin ?? '790px;'}}  icon={faSearch}/>
         </div>
    </header>
        </>
     );
}
 
export default Menu;