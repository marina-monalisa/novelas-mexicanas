const checkbox = document.getElementById("id-checkbox");
const msgErrorSenha = document.getElementById("error-senha");


function validaCPF(cpf) {
  var Soma = 0;
  var Resto; //=null
  //regex <¬
  var strCPF = String(cpf).replace(/[^\d]/g, "");
  //replace=subistibuir ->'123.456.789-00' -> 12345678900
  if (strCPF.length !== 11) {
    return false;
  }

  if (
    [
      "00000000000",
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
    ].indexOf(strCPF) !== -1
  )
    return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;

  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;

  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;

  if (Resto != parseInt(strCPF.substring(10, 11))) return false;

  return true;
}

function cadastrar(eventrec) {
  event.preventDefault(eventrec);
  const inputName = document.getElementById("input-name").value;
  const inputCPF = document.getElementById("input-cpf").value;
  const inputEmail = document.getElementById("input-email").value;
  const inputCelular = document.getElementById("input-celular").value;
  const inputDataNascimento = document.getElementById(
    "input-dataNascimento",
  ).value;
  const inputSex = document.getElementById("input-sexo").value;
  const inputSenha = document.getElementById("input-senha").value;
  const inputConfirmeSenha = document.getElementById(
    "input-confirmeSenha",
  ).value;
  const msgErrorName = document.getElementById("error-name");
  const msgErrorCPF = document.getElementById("error-cpf");
  const msgErrorEmail = document.getElementById("error-email");
  const msgErrorCelular = document.getElementById("error-celular");
  const msgErrorSexo = document.getElementById("error-sexo");
  const msgErrorSenha = document.getElementById("error-senha");
  const msgErrorConfirmeSenha = document.getElementById("error-confirmeSenha");

  //0 || '' --> false => ! => true
  if (!inputName || inputName.length < 3) {
    msgErrorName.style.display = "block";
  } else {
    msgErrorName.style.display = "none";
  }

  if (!validaCPF(inputCPF)) {
    msgErrorCPF.style.display = "block";
  } else {
    msgErrorCPF.style.display = "none";
  }

  if (!inputEmail || inputEmail.length < 6) {
    msgErrorEmail.style.display = "block";
  } else {
    msgErrorEmail.style.display = "none";
  }

  if (!inputCelular || inputCelular.length < 10) {
    msgErrorCelular.style.display = "block";
  } else {
    msgErrorCelular.style.display = "none";
  }

  if (!inputSex) {
    msgErrorSexo.style.display = "block";
  } else {
    msgErrorSexo.style.display = "none";
  }

  console.log(!inputSenha || !(inputSenha.length > 8 && inputSenha.length < 100));
  

  if (!inputSenha || !(inputSenha.length >= 8 && inputSenha.length < 100)) {
      
      msgErrorSenha.style.display = "block";
  } else {
      msgErrorSenha.style.display = "none";
  }

  if (!inputConfirmeSenha || inputConfirmeSenha !== inputSenha) {
      msgErrorConfirmeSenha.style.display = "block";
  } else {
      msgErrorConfirmeSenha.style.display = "none";
  }
}




//endereço
//   if(inputEndereco || inputEndereco < 6 ){
//       alert ("Endereço inválido!")
//   }

// 0, "", null, undefined, false ----> false
