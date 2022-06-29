import styles from '../styles/postagem.module.scss';

const Postagem = () => {
    return ( 
        <>
<div class={styles.modal}>
    Poste Uma Notícia

    <input id="inputNome" placeholder="Informe seu Nome..." />

    <input id="inputNot" placeholder="Descreva sua notícia..." />
    <div >
        <button class="salvar" onclick="cadasNot();" >SALVAR</button>   
        <button class="cancela" onclick="escondeModal();">SAIR</button>
    </div>
</div>
        </>
     );
}
 
export default Postagem;