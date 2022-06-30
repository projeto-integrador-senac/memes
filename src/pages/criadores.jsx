import styles from '../styles/Criadores.module.scss'
import Link from 'next/dist/client/link';
import Postagem from '../components/postagem';


const Criadores = () => {
    return ( 
        <div >
        
        <Link href='/'>
            <button className={styles.volta}>INÍCIO</button>
        </Link>
        <Postagem/>
                <div className={styles.text}>
            <h1 style={{color: '#157e8f', fontSize: '50px'} }>CRIADORES</h1>

            <p>Saiba tudo sobre os criadores desse site</p>
            </div>   

            <hr width="80%"  className={styles.hr}/>

        <div  className={styles.conteudo}>
        <div  className={styles.caixa}>
            <a href='#memes-?'>
                <div  className={styles.card}> 
                <img width="400px" src="/images/hudson.jpeg" alt="HTML"/>
                <h1> HUDSON </h1>   
            </div>
            </a>
        </div>

            
            <div  className={styles.card}>
                <a href='#impacto-memes'>
                <div  className={styles.caixa}>
                <img width="400px" src="https://i.pinimg.com/736x/4d/52/dd/4d52dd5d05128429831121caf456bfd3.jpg" alt="CSS"/>
                <h1> MURILO  </h1>
            </div>
            </a>
        </div>
        
            <div  className={styles.card}>
                <a href='#memes-!'>
                <div  className={styles.caixa}>
                <img width="350px" src="https://i.pinimg.com/originals/9f/cf/02/9fcf0201af14764ced3ac28c28442cf6.png" alt="JavaScript"/>
                <h1> RONEY  </h1>
                </div>
                </a>
        </div>

        <div  className={styles.card}>
                <a href='#meme-n-1'>
                <div  className={styles.caixa}>
                <img width="350px" src="https://64.media.tumblr.com/7ee8881c7e82ebe873831d21f1731474/tumblr_mzv5fh4PqF1t17f6qo1_400.gifv" alt="JavaScript"/>
                <h1> SUSANE  </h1>
                </div>
                </a>
        </div>
        </div>

        <hr width="80%"  className={styles.hr}/>

        <div className={styles.texto}>
        <div  className={styles.not}>
            <h1 id='memes-?'>HUDSON</h1>
            <p> 
                Um garoto despojado que apesar der meio despretencioso com relação aos comprometimentos trabalhistas,  quando preciso é rapidamente acionado e com grande destresa resolve suas obrigações. Um amante do esporte e que sabe que viveria plenamente  praticando do mesmo.     
            </p>
                
                <div id="listaNot"  className={styles.listaNot}> </div>
        </div>

        <div  className={styles.not}>
            <h1 id='impacto-memes'>MURILO</h1>
            <p> </p>
            <div id="listaNot"  className={styles.listaNot}> </div>
        </div>

        <div  className={styles.not}>
            <h1 id='memes-!'>RONEY </h1>
            <div id="listaNot"  className={styles.listaNot}> </div>
        </div>

        <div  className={styles.not}>
            <h1 id='meme-n-1'>SUSANE</h1>
            <div id="listaNot"  className={styles.listaNot}> </div>
        </div>
        </div>
   <div  className={styles.not}>
            <h3 className={styles.lista} style={{fontSize: "large"}}> Referência </h3>
            <ul className={styles.lista}>
                <li>DUONG, Iris. Why do memes matter?: a look at the good, the dank, and the viral. 2017. Disponível em: https://www.scmp.com/yp/discover/lifestyle/features/article/3065773/why-do-memes-matter-look-good-dank-and-viral. Acesso em: 10 jun. 2022. </li>
                <li>FULTON, Wil. I Found the World's First Meme With Help From Meme Historians. 2017. Disponível em: https://www.thrillist.com/entertainment/nation/first-meme-ever. Acesso em: 09 jun. 2022. </li>
                <li>MARCUS. What Are Memes Really?. TEDx Talks. 2017. Disponível em: https://www.youtube.com/watch?v=9hU4mzq0d1Q. Acesso em: 08 jun. 2022. </li>
                <li>Rogers, Kara. "meme". Encyclopedia Britannica. 2021. Disponível em: https://www.britannica.com/topic/meme. Acesso 10 jun. 2022. </li>
                <li>THE Original Memes. 2018. Disponível em: https://www.dictionary.com/e/the-original-memes-before-memes-listicle/. Acesso em: 09 jun. 2022.</li>
            </ul>
             <div id="listaNot"  className={styles.listaNot}> </div>
        </div>
        <div  className={styles.rodape}>
        <div  className={styles.escreva}>
            <h3>© 2022 Meme's Gallerry, Inc.</h3>
        </div>
        </div>
        
        </div>

        
     );
}
 
export default Criadores;