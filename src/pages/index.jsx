import React from 'react';
import Menu from "../components/menu";
import MenuLateral from "../components/menuLateral";
import TopMemes from "../components/TopMemes";
import styles from '../styles/Index.module.scss';
import Link from 'next/dist/client/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart, 
    faComment,
    faBookmark
  } from "@fortawesome/free-regular-svg-icons";
  import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"

const Inicio = () => {

  const [post, alteraPost] = React.useState( [] );

  const axios = require('axios').default;

  React.useEffect( () => {

    axios.get('http://localhost:3001/post')

      .then(function (response) {

          const postagem = response.data;
          alteraPost(postagem);
          console.log(response)
      })

      .catch(function (error) {
          console.log(error);
      })  

  },[] )


  
  return ( 
            <>
                <Menu />
                <MenuLateral/>
                <TopMemes/>

    <article className={styles.allbrowsers}>

    { post == 0 
        ?
        <p> Carregando... </p>  
        :
        <div>
            
            {post.map( u => {

              return(

                <>

                           
        
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
                    	<Link href={{ pathname: "/comentarios/", query:{ id_usuario: u.ID} }}>
                    		
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


              </>
              )
            })}
          </div>
      }
    
      </article>
   </>
   
  
  );
}
 
export default Inicio;
