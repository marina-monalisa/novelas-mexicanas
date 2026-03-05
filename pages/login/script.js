const msgErrorSenha = document.getElementById("error-senha");
const inputLogin = document.getElementById("input-login");
const inputSenha = document.getElementById("input-senha");

//FUNCTION
function login(eventrec){
      event.preventDefault(eventrec)
      const valorLogin = document.getElementById("input-login").value;
      const valorSenha = document.getElementById("input-senha").value;

      const LOGIN_VALIDO = "admin@admin.com";
      const SENHA_VALIDA = '1234';


      if(valorLogin == LOGIN_VALIDO && valorSenha == SENHA_VALIDA){
           // window.location.href = "../listagem/index.html";
            rememberLogin();
      }else{
            msgErrorSenha.style.display = "block";
            inputLogin.style.border = "1px solid red"
            inputSenha.style.border = "1px solid red"       
  }
  }

  //ARROW FUNCTION
  const checkboxRemember = document.querySelector('input[type=checkbox]');

  const rememberLogin = () => {
      const inputLoginRemember = document.getElementById("input-login").value;
      const inputSenhaRemember = document.getElementById("input-senha").value;

     //console.log(inputLoginRemember, inputSenhaRemember, checkboxRemember.checked);
      
      const dadosLogin = {
            login: inputLoginRemember,
            senha: inputSenhaRemember
      }

      if(checkboxRemember.checked){
            localStorage.setItem('dadosLogin', JSON.stringify(dadosLogin))
      }

  }

  const valorSalvo = JSON.parse(localStorage.getItem("dadosLogin"));
  
  if(valorSalvo.login && valorSalvo.senha){
      inputLogin.value = valorSalvo.login;
      inputSenha.value = valorSalvo.senha
  }

  




