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
  
        <div  className={styles.rodape}>
        <div  className={styles.escreva}>
            <h3>© 2022 Meme's Gallerry, Inc.</h3>
        </div>
        </div>
        
        </div>

        
     );
}
 
export default Criadores;