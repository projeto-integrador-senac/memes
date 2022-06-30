import styles from "../styles/Postagem.module.scss"
import Swal from 'sweetalert2';


const Postagem = () => {



    if (typeof window !== "undefined") {


    const axios = require('axios').default;

    const cadastroPostagem = (p) => {


        p.preventDefault()

        const descricao = document.getElementById("inputDescricao").value;
        const postagem = document.getElementById("inputMeme").value;
        
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

 const escondeModal = () => {

    console.log("blablabla")
        //document.getElementById("inputSair").none;

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
            <button className={styles.cancela} id="inputSair" onclick= {() => escondeModal()} >SAIR</button>
        </div>
    </div>
            </>
        );
}

 
export default Postagem;