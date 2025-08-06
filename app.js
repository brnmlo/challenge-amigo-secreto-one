//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Criar um array para armazenar os nomes dos amigos
let listaDeAmigos = [];
//Implementar uma função para agregar amigos
//A função não pode adicionar um nome vazio à lista
//A função não permite adicionar um nome igual ao que já tem na lista
function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;
    if(nomeDoAmigo !== "" && !listaDeAmigos.includes(nomeDoAmigo)) {
        listaDeAmigos.push(nomeDoAmigo);
    } else {
        alert("O nome já está na lista ou nenhum nome foi digitado!");
    }
    console.log(listaDeAmigos);
}   

//Implementar uma função para atualizar a lista de amigos

/*
    implementar uma função para sortear os amigos;
    o sorteio pode ser feito através do índice de cada nome na lista
*/

