// Aqui temos uma lista de exemplo.
//essa lista deve possuir os dados de todos os produtos que eu quero fazer a listagem
//estamos trabalhando com chave-valor, neste exemplo temos as chaves "id, nome e preco"
// cada chave representa 1 dado dos objetos dessa lista.
//para o seu caso, você vai precisar editar esses objetos para ter TODAS as informações
//que tem nos produtos da sua tela de listagem.
const produtos = [
  {
    id: 1,
    imagem: "../../assets/mariamercedes.jpg",
    nome: "Maria Mercedes",
    preco: "R$ 250,00",
    descricao:
      "Uma jovem humilde que muda de vida ao se casar com um milionário.",
    informacoes: "98 capítulos • 1992",
  },

  {
    id: 2,
    imagem:"../../assets/marimar.jpg",
    nome:"Marimar",
    preco:"R$ 250,00",
    descricao:"Uma história de amor, superação e vingança.",
    informacoes:"149 capítulos • 1994",
  },

  {
    id: 3,
    imagem:"../../assets/mdb.jpg",
    nome:"Maria do Bairro",
    preco:"R$ 250,00",
    descricao:"Da pobreza extrema ao amor verdadeiro.",
    informacoes:"185 capítulos • 1995"
  },

  {
    id: 4,
    imagem:"../../assets/ausurpadora.jpg",
    nome:"A Usurpadora",
    preco:"R$ 250,00",
    descricao:"Duas irmãs gêmeas com destinos opostos trocam de lugar.",
    informacoes:"102 capítulos • 1998"
  },

  {
    id: 5,
    imagem:"../../assets/amentira.jpg",
    nome:"A Mentira",
    preco:"R$ 250,00",
    descricao:"Um amor marcado por segredos, vingança e redenção.",
    informacoes:"100 capítulos • 1998"
  },

  {
    id: 6,
    imagem:"../../assets/oprivilegiodeamar.jpg",
    nome:"O Privilégio de Amar",
    preco:"R$ 250,00",
    descricao:"Uma mãe em busca da filha perdida pelo destino.",
    informacoes:"155 capítulos • 1998"
  },

  {
    id: 7,
    imagem:"../../assets/rosalinda.jpg",
    nome:"Rosalinda",
    preco:"R$ 250,00",
    descricao:"Uma jovem simples que encontra o amor verdadeiro.",
    informacoes:"80 capítulos • 1999"
  },

  {
    id: 8,
    imagem:"../../assets/amigaserivales.jpg",
    nome:"Amigas e Rivais",
    preco:"R$ 250,00",
    descricao:"Histórias cruzadas de amizade, amor e conflitos.",
    informacoes:"195 capítulos • 2001"
  },

  {
    id: 9,
    imagem:"../../assets/afeiamaisbela.jpg",
    nome:"A Feia Mais Bela",
    preco:"R$ 250,00",
    descricao:"Uma mulher inteligente que supera padrões e preconceitos.",
    informacoes:"300 capítulos • 2006"
  },

  {
    id: 10,
    imagem:"../../assets/rubi.jpg",
    nome:"Ambição, beleza e escolhas perigosas.",
    preco:"R$ 250,00",
    descricao:"Uma mulher inteligente que supera padrões e preconceitos.",
    informacoes:"115 capítulos • 2004"
  },

];

// Seleciona o container no HTML
//Precisamos selecionar um elemento HTML que existe na página, pois, somente assim conseguiremos
//informar ao HTML em qual local queremos adicionar os nossos itens da listagem.
const container = document.getElementById("container");

// Percorre o array/lista e cria os elementos na tela
//o comando "forEach" é um comando do próprio JavaScript, que percorre uma lista e realiza uma
//determinada ação para cada um dos itens que ele encontrar.
//para cada vez que esse loop rodar na lista, ele te gera um "identificador" para que seja possível
//manipular o item da lista que está naquela "rodagem" do momento,
//neste caso, estamos chamando cada um dos itens olhando como "produto"
produtos.forEach((produto, indice) => {
  // Cria o elemento HTML do tipo HTML
  //para adicionar o elemento HTML no HTML a div que fica em volta do item da lista precisa ser criado
  //desta forma "document.createElement("div")" pois, assim, eu informo ao HTML que esse é realmente um
  //elemento do tipo HTML (neste caso, uma div.)
  const card = document.createElement("article");

  //colocar o indice aqui

  // Adiciona a classe ao elemento HTML criado
  //eu resgato o elemento HTML que criei na listagem de cima e adiciona uma class nele
  //pois assim ele vai pegar os styles que existem para esse identificador de class
  card.classList.add("card");

  // Inserindo conteúdo no HTML criado na
  //aqui faremos a inserção dos itens que estão dentro de cada um dos cards
  //a estrutura HTML deve ser a mesma para todos eles, o que vai mudar são os dados
  //de cada um dos itens, assim faremos referência aos valores do objeto que está rodando
  //no loop enquanto o forEach estiver acontecendo.
  card.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.nome}" />
          <div class="card-content">
          <h2>${produto.nome}</h2>
          <p>${produto.descricao}</p>
          <span class="info">${produto.informacoes}</span>
          <div class="card-footer">
          <span class="price">${produto.preco}</span>
          <a href="../produto/index.html" class="buy-btn">Comprar</a>
          </div>
        </div>
    `;

  // Adiciona no container
  //com a div do item criada e os elementos HTML e os dados populados nele
  //agora fazemos a inserção no container que receberá toda a nossa listagem.
  container.appendChild(card);

  //lembre-se: isso tudo esta rodando no loop "forEach", ou seja, ele vai re-executar essas ações
  //pára cada um dos itens que ele encontrar na listagem que ele estiver percorrendo, neste caso do exemplo a "produtos"
});

const mostrarMenu = () =>{
  const menuMobile = document.getElementById('menu-mobile');

  if(menuMobile.style.display == 'none'){
    menuMobile.style.display = "block";
  }
  else{
    menuMobile.style.display = 'none';
  }


}
