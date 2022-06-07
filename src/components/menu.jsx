import Link from "next/link";
import styles from '../styles/Menu.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch
  } from "@fortawesome/free-solid-svg-icons";


const Menu = (props) => {
    return ( 
        <>
            <header style={{
            backgroundColor: props.cor ?? 'black'
        }} className={styles.header}>
       
        <Link href="/"><div className={styles.logo}>LR</div></Link>
        
        <input className={styles.sidemenu} type="checkbox" id={styles.sidemenu}/>
        <label className={styles.hamb} for={styles.sidemenu}><span className={styles.hambline}></span></label>
        
        <div className={styles.div}> 
            <input type="text" id={styles.txtBusca} placeholder="Buscar..." />
            <FontAwesomeIcon id={styles.btnBusca}  icon={faSearch}/>
         </div>

        <nav className={styles.nav}>
            <ul className={styles.menu}>
                        <li><a href="#">Top Memes</a></li>
                        <li><Link href="login">Login</Link> </li>
                        <li><b>/</b> </li>
                        <li><Link href="cadastro">Cadastro</Link></li>
            </ul>
        </nav>
    </header>
        </>
     );
}
 
export default Menu;