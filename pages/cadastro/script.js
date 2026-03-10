const checkbox = document.getElementById("id-checkbox");
const msgErrorSenha = document.getElementById("error-senha");
let erro = false;

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
    erro = true;
    // msgErrorName.style.display = "block";
    // inputName.style.border = "1px solid red"
  } else {
    msgErrorName.style.display = "none";
  }

  if (!validaCPF(inputCPF)) {
    erro = true;
    msgErrorCPF.style.display = "block";
  } else {
    msgErrorCPF.style.display = "none";
  }

  if (!inputEmail || inputEmail.length < 6) {
    erro = true;
    msgErrorEmail.style.display = "block";
  } else {
    msgErrorEmail.style.display = "none";
  }

  if (!inputCelular || inputCelular.length < 10) {
    erro = true;
    msgErrorCelular.style.display = "block";
  } else {
    msgErrorCelular.style.display = "none";
  }

  if (!inputSex) {
    erro = true;
    msgErrorSexo.style.display = "block";
  } else {
    msgErrorSexo.style.display = "none";
  }

  if (!inputSenha || !(inputSenha.length >= 8 && inputSenha.length < 100)) {
    erro = true;
    msgErrorSenha.style.display = "block";
  } else {
    msgErrorSenha.style.display = "none";
  }

  if (!inputConfirmeSenha || inputConfirmeSenha !== inputSenha) {
    erro = true;
    msgErrorConfirmeSenha.style.display = "block";
  } else {
    msgErrorConfirmeSenha.style.display = "none";
  }

  const checkbox = document.getElementById("id-checkbox");

  if (!checkbox.checked) {
    alert("Você precisa aceitar os termos de uso");
    return;
  }

  console.log(checkbox);

  console.log(
    inputName,
    inputCPF,
    inputEmail,
    inputCelular,
    inputDataNascimento,
    inputSex,
    inputSenha,
  );

  if (!erro) {
    //objeto usuario
    const cadastroUsuario = {
      nomeCompleto: inputName,
      cpf: inputCPF,
      email: inputEmail,
      celular: inputCelular,
      dataDeNascimento: inputDataNascimento,
      sexo: inputSex,
      senha: inputSenha,
    };

    //crio uma lista pra salvar todos os dados
    let listaCadastrados = [];
    //pega os dados antigos já cadastrados
    const dadosCadastrados = JSON.parse(localStorage.getItem("cadastrado"));
    if (dadosCadastrados) {
      listaCadastrados = dadosCadastrados;
    }
    //adiciona o novo cadastro na lista de cadastros
    listaCadastrados.push(cadastroUsuario);
    //adiciona a lista com todos os valores no banco
    localStorage.setItem("cadastrado", JSON.stringify(listaCadastrados));
    window.location.href = "../login/index.html";
  }
}

//endereço
//   if(inputEndereco || inputEndereco < 6 ){
//       alert ("Endereço inválido!")
//   }

// 0, "", null, undefined, false ----> false
