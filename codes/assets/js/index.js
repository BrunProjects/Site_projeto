if (localStorage.getItem("senha") == null){
    alert("Você precisa ter uma conta para acessar essa página");
    setTimeout(()=>{
    window.location.href = "./assets/html/signin.html"}, 2000)
}

const userLogado = JSON.parse(localStorage.getItem(userLogado));

const logado = document.querySelector("#logado");
logado.innerHTML = 'Olá ${userLogado.nome}';

function sair(){
    localStorage.removeItem("senha");
    localStorage.removeItem("usuario");
    window.location.href = "./assets/html/signin.html";
}

function adicionar(){
    


}
