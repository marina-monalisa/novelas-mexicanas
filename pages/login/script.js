const inputLogin = document.getElementById("input-login");
//console.log (inputLogin);

const inputSenha = document.getElementById("input-senha");
//console.log(inputSenha);

function login(eventrec){
      event.preventDefault(eventrec)
      const valorLogin = inputLogin.value;
      const valorSenha = inputSenha.value;

      const LOGIN_VALIDO = "admin@admin.com";
      const SENHA_VALIDA = '1234';

      if(valorLogin == LOGIN_VALIDO && valorSenha == SENHA_VALIDA){
            window.location.href = "../listagem/index.html";
      }else{
            alert("Login Inválido");
      }
}


