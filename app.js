//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//Aqui você deverá desenvolver a lógica para resolver o problema.
//Criar um array para armazenar os nomes dos amigos
let amigos = [];

/*  
    Desenvolva uma função que permita ao usuário inserir um nome no campo 
    de texto e adicioná-lo à lista de amigos criada anteriormente.
*/

function adicionarAmigo() {
    //tomando o nome digitado no campo
    let nomeDoAmigo = document.querySelector('input').value;
    //realizando as condições que impedem que uma string vazia
    //seja adicionada na lista de amigos
    if( nomeDoAmigo == "" ) { 
        alert("Por favor, insira um nome.");
    } 
    else {
        amigos.push(nomeDoAmigo);
        nomeDoAmigo = "";
    }
    atualizarLista();
}

/*  
    Crie uma função que percorra o array amigos e adicione cada nome como um
    elemento <li> dentro de uma lista HTML. Use innerHTML para limpar a lista
    antes de adicionar novos elementos.
*/

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let amigo in amigos) {
        lista.innerHTML += "<li>" + amigos[amigo] + "</li>"; //concatenando strings
    }
}
/*
    Escreva uma função que selecione aleatoriamente um dos nomes armazenados no 
    array amigos. Use Math.random() e Math.floor() para obter um índice aleatório.
*/
function sortearAmigo() {
    if( amigos != []) {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigos[numeroAleatorio]; 
    }
}

