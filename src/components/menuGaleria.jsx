import React from 'react';
import Link from "next/link";
import styles from '../styles/MenuGaleria.module.scss'


const Menu = (props) => {
    return ( 
        <>
            <header style={{
            backgroundColor: props.cor ?? '#2084d8'
        }} className={styles.header}>
       
        <Link href="/"><div className={styles.logo}> <img className={styles.ImgMg}src="/images/icon.ico"/></div></Link>
        
        <div className={styles.div}> 
          <h1>{props.texto ??'GALERIA'}</h1>
         </div>
    </header>
        </>
     );
}
 
export default Menu;