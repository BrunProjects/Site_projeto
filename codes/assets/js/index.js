let usuario = JSON.parse(localStorage.getItem(usuario_logado));

let logado = document.querySelector("#logado");
logado.innerHTML = 'Olá ${usuario.nome}';

if (localStorage.getItem("Senha") = null){
    alert("Você precisa ter uma conta para acessar essa página");
    window.location.href = "./assets/html/signin.html";
}

function sair(){
    localStorage.removeItem("Senha");
    localStorage.removeItem("usuario");
    window.location.href = "./assets/html/signin.html";
}