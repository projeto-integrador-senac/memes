import Menu from "../components/menu";
import styles from '../styles/Index.module.css';
import Link from 'next/dist/client/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart, 
    faComment,
    faBookmark
  } from "@fortawesome/free-regular-svg-icons";
  import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"


const Inicio = () => {
    return ( 
        <>
            <Menu />

<article className={styles.allbrowsers}>
  <article className={styles.browser}>
  <div className={styles.imagem}>
  <img src="https://pbs.twimg.com/profile_images/1532112034871099392/QGRSRfSh_400x400.jpg"/>
  </div>
  <Link href="/usuario">
    <h2>Paysandu<FontAwesomeIcon className={styles.checkbox} icon={faCheckCircle}/></h2></Link>
    <p className={styles.pp}>@Paysandu</p>
    <Link href="/comentarios">
    <div>
      <img className={styles.post} src="https://pbs.twimg.com/media/FUls1VgXoAAlpE5?format=jpg&name=small" />
    </div></Link>
    <FontAwesomeIcon icon={faHeart} className={styles.heart}/>
    <Link href="/comentarios">
    <FontAwesomeIcon icon={faComment} className={styles.comment}/></Link>
    <FontAwesomeIcon icon={faBookmark} className={styles.bookmark}/>
    <span className={styles.twheartbox}>
       <input className={styles.checktool} type="checkbox" name="name" value=""/>
    <span className={styles.twheart}></span>
</span>
  </article>
  <article className={styles.browser}>
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
  </article>
  <article className={styles.browser}>
    <h2>Microsoft Edge</h2>
    <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
  </article>
</article>

        </>
     );
}
 
export default Inicio;