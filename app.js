//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//Aqui você deverá desenvolver a lógica para resolver o problema.
//Criar um array para armazenar os nomes dos amigos
let amigos = [];

/*  
    Implementar uma função para agregar amigos
    A função não pode adicionar um nome vazio à lista
    A função não permite adicionar um nome igual ao que já tem na lista
*/

function adicionarAmigo() {
    //tomando o nome digitado no campo
    let nomeDoAmigo = document.querySelector('input').value;
    //realizando as condições que impedem que uma string vazia ou um nome repetido
    //seja adicionado na lista de amigos
    if( nomeDoAmigo == "" || amigos.includes( nomeDoAmigo ) ) { 
        alert("O nome já está na lista ou nenhum nome foi digitado!");
    } 
    else {
        amigos.push(nomeDoAmigo);
        nomeDoAmigo = "";
    }
    atualizarLista();
    console.log(amigos);
}
/*  
    Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro
    de uma lista HTML. Use innerHTML para limpar a lista antes de adicionar novos elementos.
*/
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let amigo in amigos) {
        lista.innerHTML += "<li>" + amigos[amigo] + "</li>"; //concatenando strings
    }
}
/*
    implementar uma função para sortear os amigos;
    1. O sorteio pode ser feito através do índice de cada nome na lista
*/
function sortearAmigo() {
    if( amigos != []) {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(Math.floor(Math.random() * amigos.length));
        let resultado = document.getElementById("sortear");
        resultado.innerHTML = amigos[numeroAleatorio]; 
    }
}

