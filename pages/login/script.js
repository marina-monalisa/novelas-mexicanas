const msgErrorSenha = document.getElementById("error-senha");
const inputLogin = document.getElementById("input-login");
const inputSenha = document.getElementById("input-senha");

//FUNCTION
function login(eventrec){
      event.preventDefault(eventrec)

    //pego os dados do banco de dados
    const cadastrados = JSON.parse(localStorage.getItem('cadastrado'));
    

   //vai buscar o usuario valido no banco de dados dos usuarios cadastrados.
    const usuarioValido = cadastrados.find((user) => {
        return user.email === inputLogin.value && user.senha === inputSenha.value;
    });

    if (usuarioValido) {

        rememberLogin();    
        alert('Sucesso')    
        window.location.href = "../listagem/index.html";    
     } else {
        document.getElementById("erro-login").textContent = "Usuário ou senha inválidos";
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
  
  if(valorSalvo?.login && valorSalvo?.senha){
      inputLogin.value = valorSalvo.login;
      inputSenha.value = valorSalvo.senha
  }




  




