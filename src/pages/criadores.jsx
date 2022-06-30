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
                <img width="400px" src="/images/criadores.png" alt="HTML"/>
                   
            </div>
            </a>
        </div>
        </div>

        <hr width="80%"  className={styles.hr}/>

        <div className={styles.texto}>
        <div  className={styles.not}>
            <h1 id='memes-?'>

                HUDSON  |  MURILO  |   RONEY  |   SUSANE
            </h1>
                
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