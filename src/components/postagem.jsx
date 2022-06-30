import styles from "../styles/Postagem.module.scss"
import Swal from 'sweetalert2';


const Postagem = () => {


if (typeof window !== "undefined") {

function mostraModal(){
    document.getElementsByClassName("modal")[0].style.display = "block"
    document.getElementsByClassName("fundo")[0].style.display = "block"   

    document.getElementById('inputNome').value = '';

    document.getElementById('inputNot').value = '';

    document.getElementById('inputNome').focus();
}

    function escondeModal(){
        document.getElementsByClassName("modal")[0].style.display = "none"
        document.getElementsByClassName("fundo")[0].style.display = "none"
}

    const axios = require('axios').default;

    const cadastroPostagem = (p) => {


        p.preventDefault()

        const descricao = document.getElementById("inptDescricao").value;
        const postagem = document.getElementById("inputPostagem").value;
        
        const obj = {
            descricao : descricao,
            postagem : postagem
        }

        ReactDOM.render(
            <Toggle />,
            document.getElementById('root')
          );

        axios.post('http://localhost:3001/postagem', obj)

        .then(function (response) {

            console.log(response)
            if(response.data == 0){
    
              Swal.fire({
                icon: 'error',
                title: 'Ops!!',
                text: 'Usuário não cadastrado',
            })
            } else {
                localStorage.setItem("iduser");
                Router.push('/')
            } 
            if(postagem.trim == ""){
            Swal.fire({
                icon: 'error',
                title: 'Ops!!',
                text: 'Postagem não cadastrada.',
            })}
        })
    }
        
}



    return ( 
        <>
<div class={styles.modal}>
    Poste Um Meme
    <form onSubmit={(p) => cadastroPostagem(p)}>
        <input id="inputDescricao" placeholder="Descrição" />

        <input id="inputMeme" placeholder="URL do MEME" />
    
    </form>
    <div >
        <button className={styles.salvar} onclick="abacaxi();"  >SALVAR</button>   
        <button className={styles.cancela} onclick={escondeModal}>SAIR</button>
    </div>
</div>
        </>
     );
}

 
export default Postagem;