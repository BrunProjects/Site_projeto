let btn = document.querySelector('.fa-eye') //mostrar a senha


btn.addEventListener('click', ()=>{ //mostra a senha quando pressionado o botao
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){ //botão pra acessar o site
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')
    
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    
    let msgError = document.querySelector('#msgError')
    let listaUser = []
    
    let userValid = {
        nome: null,
        user: null,
        senha: null
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser')) //verifica se o usuario existe no localstorage

    listaUser?.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){ //se existir o usuario no localstorage vai definir como perfil valico
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

        if(usuario.value == userValid.user && senha.value == userValid.senha){ //se o usuario e a senha existirem, vai entrar no site
            window.location.href='http://127.0.0.1:5500/index.html'

            let mathRandom = Math.random().toString(16).substr(2)
            let senha = mathRandom + mathRandom
    
            localStorage.setItem('senha', senha)
            localStorage.setItem('userLogado', JSON.stringify(userValid))
        }
        else{ //se não existir vai aparecer uma mensagem dizendo que o usuario ou senha estão errados
            userLabel.setAttribute('style', 'color: red')
            usuario.setAttribute('style', 'border-color: red')
            senhaLabel.setAttribute('style', 'color: red')
            senha.setAttribute('style', 'border-color: red')
            msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = 'Usuário ou senha incorretos'
            usuario.focus()
        }
}
