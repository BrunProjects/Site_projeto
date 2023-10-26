
const btn_add = document.querySelector(".startButton");
const divContainer = document.getElementById("container_interno");
btn_add.addEventListener("click", AddNew);



function AddNew(){
    const new_div = document.createElement("div");
    divContainer.appendChild(new_div);
    new_div.classList.add("div_shadow");

}




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


