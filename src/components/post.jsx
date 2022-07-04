import React from 'react';
import styles from '../styles/Index.module.scss';
import Link from 'next/dist/client/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart, 
    faComment,
    faBookmark
  } from "@fortawesome/free-regular-svg-icons";
  import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"


const Post = (props) => {

    const u = props.u

    return ( 

        <article className={styles.browser}>
                    <div className={styles.imagem}>
                      <Link href="/perfil">
                      <img src="https://pbs.twimg.com/profile_images/1532112034871099392/QGRSRfSh_400x400.jpg"/>
                      </Link>
                    </div>
					<div>
						<Link href="/perfil">
						<h2>{u.Nome}</h2></Link>
                    	<p className={styles.pp}>@{u.UserName}</p> 
                    </div>
                     <div>
                    	
                    </div>
                    <div className={styles.post}>
                    	<Link href={{ pathname: "/comentarios/", query:{ id_post: u.ID} }}>
                    		
							<img src={`${u.PUBLICACAO}`} />
                    	</Link> 
                    </div>
                    <FontAwesomeIcon icon={faHeart} className={styles.heart}/>
                   
                    <FontAwesomeIcon onClick={"/comentarios"} icon={faComment} className={styles.comment}/>
                    <FontAwesomeIcon icon={faBookmark} className={styles.bookmark}/>
                      <span className={styles.twheartbox}>
                        <input className={styles.checktool} type="checkbox" name="name" value=""/>
                      <span className={styles.twheart}></span>
                  </span>
                  </article>


     );
}
 
export default Post;