var not = [];
var nome = [];

function cadasNot(){

   
    var not_digi;
    not_digi = document.getElementById("inputNot").value;

   
    var nome_digi;
    nome_digi = document.getElementById("inputNome").value;

   
    if(not_digi.trim() == "" || nome_digi.trim() == ""){
        Swal.fire({
            icon: 'error',
            title: 'OPA.. ERRO',
            text: 'SEM NADA NÃO DÁ PRA POSTAR NÉ',
          })
        return
    }


    Swal.fire({
        icon: 'success',
        title: 'Boaa ',
        text: 'Noticia Postada amigão',
      })

    
    not.push(not_digi);
    nome.push(nome_digi);

    
    var html = "";
    html += "<ul>";
    for( var i = 0; i < not.length; i++ ){
        html += "<li> <strong>" + nome[i] + "</strong> <br> " + not[i] + "</li> <br>";
    }
    html += "</ul>";

    
    document.getElementById("listaNot").innerHTML = html;

    
    document.getElementById("listaEscritor").innerHTML = nome;

    
    escondeModall();
}

function mostraNoti(){
    document.getElementsByClassName("modal")[0].style.display = "block"
    document.getElementsByClassName("fundo")[0].style.display = "block"   

    document.getElementById('inputNome').value = '';

    document.getElementById('inputNot').value = '';

    document.getElementById('inputNome').focus();
}

function escondeModall(){
    
    document.getElementsByClassName("modal")[0].style.display = "none"
    document.getElementsByClassName("fundo")[0].style.display = "none"
}

function escondeModal(){

    Swal.fire({
        title: 'Você tem certeza que quer sair?',
        text: "Vai perder sua Notícia :(",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#59ac00',
        cancelButtonColor: '#ff0000',
        confirmButtonText: 'Sim, Quero!'
      }).then((result) => {
        if (result.isDismissed) {
          mostraNoti();
        }
      })

    document.getElementsByClassName("modal")[0].style.display = "none"
    document.getElementsByClassName("fundo")[0].style.display = "none"
}
