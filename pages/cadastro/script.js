const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputCelular = document.getElementById("input-celular");
const inputDataNascimento = document.getElementById("input-dataNascimento");
const inputSenha = document.getElementById("input-senha");
const inputConfirmeSenha = document.getElementById("input-confirmeSenha");

function mostrarValorDoInput(){
      const valorNome = inputName.value;
      const valorEmail = inputEmail.value;
      const valorCelular = inputCelular.value;
      const valorDataNascimento = inputDataNascimento.value;
      const valorSenha = inputSenha.value;
      const valorConfirmeSenha = inputConfirmeSenha.value;

      console.log("Nome:", valorNome );
      console.log("E-mail:", valorEmail );
      console.log("Celular:", valorCelular );
      console.log("Data de Nascimento:", valorDataNascimento );
      console.log("Senha:", valorSenha );
      console.log("Confirme a senha:", valorConfirmeSenha );

 }