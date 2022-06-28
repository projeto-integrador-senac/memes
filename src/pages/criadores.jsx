import styles from '../styles/Criadores.module.scss'
import Link from 'next/dist/client/link';


const Criadores = () => {
    return ( 
        <div >
        
        <Link href='/'>
            <button className={styles.volta}>INÍCIO</button>
        </Link>

                <div className={styles.text}>
            <h1 style={{color: '#980ada', fontSize: '50px'} }>CRIADORES</h1>

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
            <p>É comum nos dias de hoje se deparar com um meme pelo menos uma vez ao decorrer do dia, através de alguma rede social ou em uma conversa com amigos, seja uma foto, vídeo, gif, figurinha, ou até mesmo uma frase que remete a algo que foi viral em algum ponto. 

Mas afinal, o que são memes? 

“Meme” é um termo que vem do grego, mimema, que significa imitação, primeiramente introduzido por Richard Dawkins em 1976 em seu livro “The selfish gene” (O gene egoísta).  

Em seu livro, Dawkins, concebeu memes como um paralelo cultural aos genes biológicos e os considerou uma forma semelhante aos genes "egoístas", como estar no controle de sua própria reprodução e, assim, servir a fins próprios. A partir disso, definiu memes como ideias que carregam informações que são replicadas, e transmitidas de uma pessoa para outra possuindo a capacidade de evoluir e mutar aleatoriamente. 

Entretanto, para Limor Shifman, professora de comunicação e jornalismo na Universidade Hebraica de Jerusalém e autora do livro “Memes in the Digital Culture” (Memes na cultura digital), esse conceito de memes, apesar de fazer sentido não mantem mais a capacidade de definir o que são memes nos tempos modernos. Para ela existe uma definição geral do que memes são, uma ideia que se espalha dentro de uma cultura, mas essa definição não ajuda a decidir o que são memes e o que não são no mundo de hoje. 

Desta forma, podemos concluir que memes possuem uma definição subjetiva derivada de ideias.  

Para Marcus em sua apresentação no TEDTalk em 2017, memes podem ser definidos como uma forma para pessoas se expressarem ou compartilharem algo de forma artística, original e divertida. São ideias que representam muitas coisas como linguagem, emoção, identidade cultura, história, memoria, comunidade, hobbies, relacionamentos, vida real e algumas vezes nada. Contudo, apesar da mensagem que o meme pretende passar, ou não passar, memes são ideias que valem a pena serem espalhadas. </p>
            <div id="listaNot"  className={styles.listaNot}> </div>
        </div>

        <div  className={styles.not}>
            <h1 id='impacto-memes'>IMPACTO DOS MEMES NA SOCIEDADE</h1>
            <p>Partindo do princípio de que memes são uma forma dos seres humanos expressarem ideias, opiniões e emoções, então é possível afirmar que são reflexos da sociedade em que o ser humano está inserido. A mensagem de um meme pode ir de uma lembrança particular que faz o criador do meme sentir vergonha a algo relacionado a filmes ou livros que um grupo de pessoas específicos se identificam.  

Iris Duong (2017) se refere a memes como simples, sucintos e explícitos em suas mensagens, sendo de fácil e rápida acessibilidade, capaz de alcançar um grande público em poucos minutos, podendo assim, ser usados como ferramentas de propaganda que podem facilmente convencer e consolidar crenças que rapidamente se tornam populares entre os cibernautas.  

Segundo Marcus (2017), existe diversos aspectos que podem fazer um meme ter impacto, sendo eles estilo de vida, onde um meme mostra um conhecimento compartilhado que um grupo de pessoas podem se relacionar, ética, memes que fazem outras pessoas questionarem sua própria ética, marketing/propaganda, marcas criam memes para tentar criar um vínculo ou afirmar a utilidade de seu produto para o consumidor, e por fim, política, memes criado para atacar ou enaltecer ideias ou figuras políticas  a fim de influenciar a mente de potenciais eleitores.  

Independentemente de serem memes e possuírem a função principal de entreter e divertir as pessoas de maneiras inofensiva, memes também podem se tornar algo prejudicial quando usados para fazer “piadas” com temas de racismo, intolerância religiosa, homofobia, entre outros temas ofensivos para muitas pessoas e/ou grupos sociais. Outra maneira de usar memes de forma prejudicial ao ambiente virtual é quando memes são usados para divulgarem informações falsas online de forma rápida e eficaz, ajudando a reforçar Fake News, uma vez que memes são simples de fazer e rápidos de espalhar.  

Por isso é sempre importante lembrar a si mesmo e a outros para não confiarem em tudo que se lê na internet, sempre procurando fontes confiáveis e verificar informações antes de passá-las a diante. </p>
            <div id="listaNot"  className={styles.listaNot}> </div>
        </div>

        <div  className={styles.not}>
            <h1 id='memes-!'>COMO MEMES SÃO CONSIDERADOS MEMES </h1>
            <p>Will Fulton, escritor para Thrillist, escreveu em seu artigo para o site em 2017 chamado de “I Found the World's First Meme With Help From Meme Historians” (Encontrei O Primeiro Meme Do Mundo Com A Ajuda De Historiadores De Memes) desenvolveu um acrônimo para definir o que um meme tem que ter para ser considerado um meme e o chamou, convenientemente, de M.E.M.E., sendo cada sigla representação de: 

Mensagem: mensagem ou referência central claramente definida que seja compreendida e relacionável por conhecimento ou experiência comumente compartilhados. 

Evolução: meme não pode permanecer estático. Deve ser adotado e remixado por uma comunidade de pessoas que o adote. 

Maleabilidade: deve ajudar em sua própria evolução por ter características definidas que podem ser alteradas, mantendo e preservando alguma aparência da mensagem original. 

Efeito: deve atingir um certo nível de popularidade e compreensão, ou a mensagem não importará. Talvez a parte mais importante do meme seja sua viralidade (no sentido viral). 

Para Marcus (2017), objetivo do meme bem-sucedido é criar engajamento por meio de likes, comentários e compartilhamento, assim outras pessoas vão replicar, se inspirar e/ou fazer outra coisa a partir desse material fonte. Marcus pontua que não existe nenhuma permanência nesse estado de popularidade. </p>
            <div id="listaNot"  className={styles.listaNot}> </div>
        </div>

        <div  className={styles.not}>
            <h1 id='meme-n-1'>QUAL O PRIMEIRO MEME </h1>
            <p>Assim como seu nome, meme, memes não são um produto originado dentro da internet e não há muita documentação a respeito de qual seria o primeiro meme do mundo.  

No entanto, existe uma certa concordância no que diz respeito ao primeiro meme da internet. Baby cha-cha-cha, também conhecido como bebê dançarino, é um meme do início da internet. Criado em 1996, trata-se de uma animação em 3D para testar novas habilidades do software de CGI (Computer Graphic Imagery, também conhecida como computação gráfica) do estúdio Kinetix Character Studio.</p>
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