import {
  titulo,
  cabecalho,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  texto,
  botao,
  link,
  linha,
  lista,
  listaOrdenada,
  modo,
  responsivo,
  tituloPagina,
  largura,
  fonte,
  fundo,
  espacamentoVertical
} from "@fluxojs/engine";

tituloPagina("Fluxo | Guia da documentação");
modo("claro");
responsivo();
fonte("serifa");
largura(78);
espacamentoVertical(12)
fundo("#f3efe6");

const ESCALA = {
  tituloPrincipal: 36,
  tituloSecao: 28,
  tituloBloco: 22,
  passoSecao: 22,
  corpo: 16,
  lista: 16,
  codigo: 14,
  pequeno: 15
};

const tituloSecao = (conteudo) =>
  h2(conteudo)
    .tamanho(ESCALA.tituloSecao)
    .cor("azul marinho")
    .margemVertical(22)
    .sublinhado();

const passoSecao = (txt) =>
  h3(txt)
    .tamanho(ESCALA.passoSecao)
    .cor("azul marinho")
    .margemVertical(22);

const paragrafo = (conteudo, onde) =>
  texto(conteudo, onde)
    .tamanho(ESCALA.corpo)
    .cor("cinza escuro")
    .alturaLinha(1.55)
    .margemVertical(8);

const blocoCodigo = (conteudo, onde) =>
  texto(conteudo, onde)
    .fonte("maquina")
    .tamanho(ESCALA.codigo)
    .cor("preto")
    .alturaLinha(1.45);

const destaque = (conteudo, onde) =>
  cardPadrao(
    texto(conteudo, onde)
      .tamanho(ESCALA.pequeno)
      .cor("verde escuro"),
    "destaque",
    "conforto"
  );

const definirId = (elemento, id) => {
  elemento.elemento.id = id;
  return elemento;
};

const cardPadrao = (bloco, tipo = "conteudo", densidade = "normal") => {
  const fundoPorTipo = {
    conteudo: "#fffdf8",
    apoio: "#f6f1e4",
    destaque: "#ecf7ec",
    sumario: "#eef3fb",
    codigo: "#f8f6ef"
  };

  const espacamentoPorDensidade = {
    compacto: { py: 8, px: 14, my: 8 },
    normal: { py: 10, px: 18, my: 10 },
    conforto: { py: 12, px: 20, my: 12 }
  };

  const fundoCard = fundoPorTipo[tipo] || fundoPorTipo.conteudo;
  const espacamento = espacamentoPorDensidade[densidade] || espacamentoPorDensidade.normal;

  return bloco
    .fundo(fundoCard)
    .largura("100%")
    .espacamentoVertical(espacamento.py)
    .espacamentoHorizontal(espacamento.px)
    .margemVertical(espacamento.my);
};

const cardLista = (bloco, densidade = "normal") => {
  const espacamentoHorizontalLista = {
    compacto: 28,
    normal: 36,
    conforto: 40
  };

  const pxLista = espacamentoHorizontalLista[densidade] || espacamentoHorizontalLista.normal;

  return cardPadrao(bloco, "conteudo", densidade)
    .espacamentoHorizontal(pxLista);
};

const caixaApostila = (tituloCaixa, conteudo) => {
  const box = cardPadrao(linha(), "apoio", "conforto");
  box.elemento.style.display = "block";

  texto(tituloCaixa, box)
    .negrito()
    .cor("azul marinho")
    .tamanho(ESCALA.corpo)
    .margemVertical(4);

  texto(conteudo, box)
    .tamanho(ESCALA.pequeno)
    .cor("cinza escuro")
    .alturaLinha(1.5)
    .margemVertical(4);

  return box;
};

const documentarFuncao = ({ nome, descricao, itens, exemplo }) => {
  h3(nome)
    .cor("azul escuro")
    .tamanho(ESCALA.tituloBloco)
    .margemVertical(14);

  cardPadrao(paragrafo(descricao), "conteudo", "normal");

  cardLista(
    lista(itens)
      .tamanho(ESCALA.pequeno),
    "normal"
  );

  cardPadrao(blocoCodigo(exemplo), "codigo", "normal");
};

definirId(
  h1("Apostila Fluxo: do zero ao uso real")
    .cor("azul marinho")
    .tamanho(ESCALA.tituloPrincipal)
    .alinhar("centro")
    .margemVertical(8),
  "topo"
);

paragrafo("Edição prática para iniciantes • leitura guiada por unidades")
  .alinhar("centro")
  .italico()
  .tamanho(ESCALA.pequeno);

paragrafo(
  "Esta apostila foi feita para você aprender Fluxo em blocos curtos. Cada unidade explica um tema, mostra exemplos e fecha com uma tarefa rápida para fixação."
)
  .alinhar("centro")
  .tamanho(ESCALA.corpo);

paragrafo("Esta própria página foi construída com a Fluxo.")
  .alinhar("centro")
  .cor("verde escuro")
  .tamanho(ESCALA.pequeno);

caixaApostila(
  "Como usar esta apostila",
  "1) Leia uma unidade por vez. 2) Rode os exemplos no seu arquivo. 3) Faça a tarefa rápida no final da unidade. 4) Avance só quando o resultado aparecer no navegador."
);

tituloSecao("Sumário da apostila");

const indice = cardPadrao(linha(), "sumario", "conforto");

link("Unidade 0 • Instalação", "#instalacao", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 1 • Ideia principal", "#ideia-principal", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 2 • Primeiro código", "#primeiro-codigo", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 3 • Funções mais importantes", "#funcoes-mais-importantes", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 4 • Parâmetro onde", "#parametro-onde", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 5 • Mudar aparência", "#mudar-aparencia", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 6 • Listas sem mistério", "#listas-sem-misterio", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 7 • Botões e ações", "#botoes-e-acoes", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 8 • Layout e espaçamento", "#largura-fonte-e-fundo", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 9 • Modo e celular", "#modo-claro-modo-escuro-e-celular", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 10 • Sistema de headings", "#sistema-de-headings", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 11 • Nomes alternativos", "#links-e-aliases", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 12 • Receita curta", "#receita-curta-para-comecar", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 13 • Título da aba", "#titulo-da-aba", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 14 • Bastidores do codigo.js", "#bastidores-codigo-js", indice)
  .cor("azul marinho")
  .negrito();

link("Unidade 15 • Referência de nomes", "#referencia-de-nomes", indice)
  .cor("azul marinho")
  .negrito();

caixaApostila(
  "Roteiro sugerido de estudo",
  "Sessão 1 (25 min): unidades 1 a 4. Sessão 2 (25 min): unidades 5 a 8. Sessão 3 (20 min): unidades 9 a 13 + revisão. Sessão 4 (10 min): unidade 15 como consulta rápida de nomes."
);


definirId(tituloSecao("Unidade 0 — Instalação"), "instalacao");

paragrafo(
  "Antes de começar a usar a Fluxo, você precisa preparar um ambiente simples com Node.js e Vite."
);

caixaApostila(
  "O que você precisa ter instalado",
  "Você precisa do Node.js (recomendado versão LTS). Ele permite instalar ferramentas como o Vite e o pacote da Fluxo."
);

passoSecao("Passo 1 — Instalar o Node.js");

paragrafo(
  "Acesse o site oficial do Node.js, baixe a versão LTS e instale normalmente. Depois disso, abra o terminal e verifique se deu certo:"
);

cardPadrao(
  blocoCodigo(`node -v
npm -v`),
  "codigo",
  "normal"
);

paragrafo(
  "Se aparecerem números de versão, está tudo pronto para continuar."
);

passoSecao("Passo 2 — Criar um projeto com Vite");

paragrafo(
  "Agora vamos criar um projeto simples usando o Vite, que é um servidor leve para rodar seu código no navegador."
);

cardPadrao(
  blocoCodigo(`npm create vite@latest meu-projeto`),
  "codigo",
  "normal"
);

paragrafo(
  "Escolha a opção 'Vanilla' (JavaScript puro). Depois entre na pasta:"
);

cardPadrao(
  blocoCodigo(`cd meu-projeto`),
  "codigo",
  "normal"
);

paragrafo(
  "Instale as dependências:"
);

cardPadrao(
  blocoCodigo(`npm install`),
  "codigo",
  "normal"
);

passoSecao("Passo 3 — Criar o HTML base");

paragrafo(
  "Na raiz do projeto, você pode usar um index.html extremamente simples. A Fluxo vai cuidar do resto."
);

cardPadrao(
  blocoCodigo(`<!DOCTYPE html>
<script type="module" src="./src/documentacao.js"></script>`),
  "codigo",
  "normal"
);

paragrafo(
  "Esse arquivo apenas aponta para o seu JavaScript principal."
);

passoSecao("Passo 4 — Criar seu arquivo JS");

paragrafo(
  "Dentro da pasta src/, crie um arquivo com o nome que quiser. Por exemplo:"
);

cardPadrao(
  blocoCodigo(`src/documentacao.js`),
  "codigo",
  "normal"
);

paragrafo(
  "É nesse arquivo que você vai escrever usando a Fluxo."
);

passoSecao("Passo 5 — Instalar a Fluxo");

paragrafo(
  "Agora instale a engine Fluxo no seu projeto:"
);

cardPadrao(
  blocoCodigo(`npm install @fluxojs/engine`),
  "codigo",
  "normal"
);

paragrafo(
  "Depois disso, você já pode importar e começar a usar normalmente."
);

passoSecao("Passo 6 — Rodar o projeto");

paragrafo(
  "Para ver sua página funcionando, execute:"
);

cardPadrao(
  blocoCodigo(`npm run dev`),
  "codigo",
  "normal"
);

paragrafo(
  "Abra o navegador no endereço mostrado (geralmente http://localhost:5173)."
);

destaque(
  "Se tudo estiver certo, qualquer código que você escrever no arquivo JS já vai aparecer na tela automaticamente."
);

caixaApostila(
  "Tarefa rápida da Unidade 0",
  "Crie o projeto, rode o servidor e faça um teste simples importando titulo() e texto(). Se aparecer no navegador, você já está pronto para a próxima unidade."
);

definirId(tituloSecao("Unidade 1 — A ideia principal"), "ideia-principal");

paragrafo(
  "Em vez de escrever HTML inteiro na mão, você chama funções que criam os elementos para você. Cada função devolve um objeto com botões de estilo, então dá para continuar ajustando tudo sem complicação."
);

cardLista(lista([
  "titulo(...) cria um título grande.",
  "cabecalho(...) cria headings nativos de h1 até h6.",
  "h1(...) até h6(...) são atalhos prontos para headings.",
  "tituloPagina(...) define o título da aba do navegador de forma explícita.",
  "link(...) cria links clicáveis para montar índices e atalhos.",
  "texto(...) cria um parágrafo.",
  "botao(...) cria um botão que faz algo quando clicado.",
  "lista(...) cria uma lista com bolinhas.",
  "listaOrdenada(...) cria uma lista numerada.",
  "linha(...) organiza elementos lado a lado.",
  "largura(...), fonte(...), fundo(...), margem(...) e espacamento(...) ajustam a aparência.",
  "margemVertical(...), margemHorizontal(...), espacamentoVertical(...) e espacamentoHorizontal(...) refinam os lados.",
  "modo(...) e responsivo() ajudam na base da página."
])
  .tamanho(17), "conteudo", "normal");

definirId(tituloSecao("Unidade 2 — Seu primeiro código"), "primeiro-codigo");

paragrafo("Se você quiser começar pelo mais básico, use este padrão:");

cardPadrao(blocoCodigo(`titulo("Meu primeiro site")
  .cor("azul")
  .tamanho(36)
  .alinhar("centro")

texto("Olá! Este é o meu primeiro texto na Fluxo.")
  .alinhar("centro")
  .tamanho(18)`), "codigo", "normal");

paragrafo(
  "O exemplo acima cria um título e um texto. A parte depois do ponto serve para estilizar o elemento criado."
);

destaque(
  "Dica importante: quase tudo que a Fluxo cria devolve um objeto encadeável. Isso significa que você pode escrever uma linha atrás da outra sem repetir a mesma parte várias vezes."
);

caixaApostila(
  "Tarefa rápida da Unidade 2",
  "Crie um título e dois parágrafos no centro da tela. Depois altere só as cores, sem mexer no conteúdo."
);

definirId(tituloSecao("Unidade 3 — As funções mais importantes"), "funcoes-mais-importantes");

cardLista(lista([
  "titulo(texto, onde)\nCria um título principal. Use para nomes de página, seções e chamadas importantes.",
  "cabecalho(nivel, texto, onde)\nCria um heading nativo de h1 até h6.",
  "h1(texto, onde) até h6(texto, onde)\nAtalhos prontos para cada nível de heading.",
  "tituloPagina(texto)\nDefine o título da aba do navegador de forma explícita.",
  "link(texto, href, onde)\nCria um link clicável para índice, atalhos ou páginas externas.",
  "texto(conteudo, onde)\nCria um parágrafo. É a função mais usada para explicar coisas.",
  "botao(rotulo, acao, onde)\nCria um botão. O segundo parâmetro é o que acontece quando a pessoa clica.",
  "lista(itens, onde)\nCria uma lista com marcadores.",
  "listaOrdenada(itens, onde)\nCria uma lista numerada.",
  "linha(onde)\nCria um bloco para colocar vários elementos lado a lado.",
  "largura(valor, onde)\nDefine a largura da página ou de um bloco.",
  "fonte(valor, onde)\nDefine a fonte da página ou de um bloco.",
  "fundo(valor, onde)\nDefine a cor de fundo da página ou de um bloco.",
  "margem(valor, onde)\nDefine a margem externa de todos os lados.",
  "margemVertical(valor, onde)\nDefine a margem de cima e de baixo.",
  "margemHorizontal(valor, onde)\nDefine a margem da esquerda e da direita.",
  "espacamento(valor, onde)\nDefine o espaçamento interno (padding) de todos os lados.",
  "espacamentoVertical(valor, onde)\nDefine o espaçamento interno de cima e de baixo.",
  "espacamentoHorizontal(valor, onde)\nDefine o espaçamento interno da esquerda e da direita.",
  "paddingVertical(valor, onde) e paddingHorizontal(valor, onde)\nAliases para espaçamento interno vertical e horizontal.",
  "modo(tipo)\nTroca entre aparência clara e escura.",
  "responsivo()\nPrepara a página para celular."
])
  .tamanho(16), "normal");

cardPadrao(paragrafo(
  "A partir daqui está o guia detalhado de cada função, com assinatura, tipos aceitos, retorno (objeto encadeável) e exemplos de uso real."
)
  .negrito(), "apoio", "compacto");

documentarFuncao({
  nome: "titulo(texto, onde?)",
  descricao: "Cria um heading h1 pronto para destaque principal. Pelo comportamento da engine, o primeiro título também pode definir o document.title automaticamente.",
  itens: [
    "Parâmetro texto (string): conteúdo visível do título.",
    "Parâmetro onde (HTMLElement | objeto da engine, opcional): destino do elemento; sem valor, vai para body.",
    "Retorno: FerramentasEngine encadeável (cor, tamanho, alinhar, margem, espaçamento e outros).",
    "Quando usar: topo da página, nome do projeto, chamada principal de uma seção.",
    "Observação: se tituloPagina(...) já tiver sido chamada, o título da aba não é trocado automaticamente."
  ],
  exemplo: `titulo("Portal da turma")
  .cor("azul marinho")
  .tamanho(42)
  .alinhar("centro")`
});

documentarFuncao({
  nome: "cabecalho(nivel, texto, onde?)",
  descricao: "Cria headings HTML nativos do h1 ao h6 com semântica correta. O nível é normalizado para o intervalo de 1 a 6.",
  itens: [
    "Parâmetro nivel (number): 1 a 6; valores fora da faixa são ajustados automaticamente.",
    "Parâmetro texto (string): rótulo do cabeçalho.",
    "Parâmetro onde (opcional): destino do heading.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: estrutura semântica da página (seções e subseções)."
  ],
  exemplo: `cabecalho(2, "Módulo 1")
  .cor("verde escuro")
  .margemVertical(14)`
});

documentarFuncao({
  nome: "h1(...) até h6(...) e heading(...)",
  descricao: "Atalhos para acelerar a criação de headings sem repetir o nível manualmente. heading(...) é alias direto de cabecalho(...).",
  itens: [
    "h1(texto, onde?) equivale a cabecalho(1, texto, onde?).",
    "h2(texto, onde?) equivale a cabecalho(2, texto, onde?).",
    "... até h6(texto, onde?).",
    "heading(nivel, texto, onde?) é nome alternativo de cabecalho.",
    "Retorno: FerramentasEngine encadeável em todos os casos."
  ],
  exemplo: `h2("Conteúdo")
  .cor("azul")

h3("Detalhes")
  .cor("marrom")`
});

documentarFuncao({
  nome: "tituloPagina(texto)",
  descricao: "Define explicitamente o título da aba do navegador (document.title). Quando chamada, impede que novos títulos/cabeçalhos mudem a aba automaticamente.",
  itens: [
    "Parâmetro texto (string): valor exibido na aba.",
    "Retorno: string com o valor final aplicado em document.title.",
    "Quando usar: SEO básico, nome fixo de produto, páginas com navegação entre seções.",
    "Dica: chame no início do arquivo para manter comportamento previsível."
  ],
  exemplo: `tituloPagina("Fluxo | Guia completo")`
});

documentarFuncao({
  nome: "texto(conteudo, onde?)",
  descricao: "Cria um parágrafo p para conteúdo corrido, com suporte a quebra de linha (white-space: pre-wrap).",
  itens: [
    "Parâmetro conteudo (string): texto do parágrafo.",
    "Parâmetro onde (opcional): destino do parágrafo.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: explicações, instruções e blocos de leitura.",
    "Vantagem: excelente para encadear tipografia (tamanho, alinhamento, alturaLinha)."
  ],
  exemplo: `texto("Aprenda no seu ritmo.")
  .tamanho(18)
  .alturaLinha(1.6)
  .alinhar("centro")`
});

documentarFuncao({
  nome: "botao(rotulo, acao, onde?)",
  descricao: "Cria um button com type='button' e conecta uma função ao clique.",
  itens: [
    "Parâmetro rotulo (string): texto exibido no botão.",
    "Parâmetro acao (() => void, opcional): função chamada no clique.",
    "Parâmetro onde (opcional): destino do botão.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: interações, filtros, confirmação de ações, navegação local."
  ],
  exemplo: `botao("Enviar", () => {
  alert("Cadastro enviado")
})
  .fundo("azul")
  .cor("branco")`
});

documentarFuncao({
  nome: "link(texto, href, onde?)",
  descricao: "Cria uma âncora a com texto clicável. Já vem com sublinhado e cursor de ponteiro para feedback visual imediato.",
  itens: [
    "Parâmetro texto (string): conteúdo visível do link.",
    "Parâmetro href (string): destino (#id, URL externa ou rota relativa).",
    "Parâmetro onde (opcional): destino do link.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: índice interno, links externos, atalhos entre blocos da página."
  ],
  exemplo: `link("Ir para contato", "#contato")
  .cor("azul marinho")
  .negrito()`
});

documentarFuncao({
  nome: "lista(itens, onde?)",
  descricao: "Cria uma lista com marcadores (ul). Aceita array ou bloco de texto com uma linha por item.",
  itens: [
    "Parâmetro itens: array, string, número, boolean ou valor simples.",
    "Se itens for string com múltiplas linhas, cada linha vira um item.",
    "Marcadores iniciais '-', '*' são removidos automaticamente no texto em bloco.",
    "Parâmetro onde (opcional): destino da lista.",
    "Retorno: FerramentasEngine encadeável."
  ],
  exemplo: `lista(` + "`" + `
- Planejar
- Escrever
- Revisar
` + "`" + `)
  .fundo("bege")`
});

documentarFuncao({
  nome: "listaOrdenada(itens, onde?)",
  descricao: "Cria uma lista numerada (ol) com a mesma flexibilidade de entrada da função lista(...).",
  itens: [
    "Parâmetro itens: array ou texto multilinha.",
    "Parâmetro onde (opcional): destino da lista.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: passos, ranking, sequências de execução."
  ],
  exemplo: `listaOrdenada([
  "Abrir projeto",
  "Criar seção",
  "Publicar"
])`
});

documentarFuncao({
  nome: "linha(onde?)",
  descricao: "Cria um container horizontal em flexbox para posicionar elementos lado a lado com quebra automática em telas menores.",
  itens: [
    "Parâmetro onde (opcional): destino do container.",
    "Estilo base: display flex, gap 10px, align-items center, flex-wrap wrap.",
    "Retorno: FerramentasEngine encadeável (o próprio container).",
    "Quando usar: barras de ação, grupos de links, composição de cartões."
  ],
  exemplo: `const barra = linha()

botao("Salvar", () => {}, barra)
botao("Cancelar", () => {}, barra)`
});

documentarFuncao({
  nome: "largura(valor, onde?)",
  descricao: "Define width com duas formas: número vira porcentagem e string vira CSS direto. Também centraliza com margem automática e marca classe para ajuste no responsivo.",
  itens: [
    "Parâmetro valor (number | string): ex. 72, '420px', '32rem'.",
    "Parâmetro onde (opcional): elemento alvo; sem valor aplica no body.",
    "Retorno: FerramentasEngine encadeável.",
    "Detalhe interno: adiciona classe usada pela função responsivo().",
    "Quando usar: limitar leitura, criar colunas centrais e blocos fixos."
  ],
  exemplo: `largura(72)
largura("420px", card)`
});

documentarFuncao({
  nome: "fonte(valor, onde?)",
  descricao: "Aplica font-family com nomes amigáveis (sistema, serifa, semserifa, maquina, cursiva) ou qualquer valor CSS válido.",
  itens: [
    "Parâmetro valor (string): nome mapeado ou família CSS livre.",
    "Parâmetro onde (opcional): alvo da fonte.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: identidade visual de página, destaque de código e leitura longa."
  ],
  exemplo: `fonte("serifa")
fonte("'Fira Sans', sans-serif", bloco)`
});

documentarFuncao({
  nome: "fundo(valor, onde?)",
  descricao: "Define background-color usando nomes amigáveis da engine ou qualquer cor CSS.",
  itens: [
    "Parâmetro valor (string): ex. 'bege', '#f6f1e8', 'rgb(20,20,20)'.",
    "Parâmetro onde (opcional): alvo da cor de fundo.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: separar seções, destacar blocos de aviso e reforçar hierarquia visual."
  ],
  exemplo: `fundo("bege")
fundo("#fffdf6", painel)`
});

documentarFuncao({
  nome: "margem(valor, onde?)",
  descricao: "Define margin em todos os lados. Números são convertidos para px; string é aplicada como CSS puro.",
  itens: [
    "Parâmetro valor (number | string): ex. 24, '2rem', '4% auto'.",
    "Parâmetro onde (opcional): alvo da margem.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: afastar blocos entre si e criar respiro externo."
  ],
  exemplo: `margem(24)
margem("1rem auto", cartao)`
});

documentarFuncao({
  nome: "margemVertical(valor, onde?)",
  descricao: "Ajusta apenas margem superior e inferior, mantendo laterais intactas.",
  itens: [
    "Parâmetro valor (number | string): ex. 16, '2rem'.",
    "Parâmetro onde (opcional): alvo da margem vertical.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: separar seções em páginas longas sem mexer na largura útil."
  ],
  exemplo: `margemVertical(18)
texto("Bloco com respiro")`
});

documentarFuncao({
  nome: "margemHorizontal(valor, onde?)",
  descricao: "Ajusta apenas margem esquerda e direita, útil para dar recuo lateral ou equilibrar layout.",
  itens: [
    "Parâmetro valor (number | string): ex. 12, '3vw'.",
    "Parâmetro onde (opcional): alvo da margem horizontal.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: recuo em blocos de leitura e ajustes finos de composição."
  ],
  exemplo: `margemHorizontal(20)
lista(["Item A", "Item B"])`
});

documentarFuncao({
  nome: "espacamento(valor, onde?)",
  descricao: "Define padding em todos os lados (espaço interno do elemento).",
  itens: [
    "Parâmetro valor (number | string): ex. 16, '1.5rem'.",
    "Parâmetro onde (opcional): alvo do padding.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: criar caixas de conteúdo mais confortáveis e destacadas."
  ],
  exemplo: `espacamento(16, card)
fundo("bege", card)`
});

documentarFuncao({
  nome: "espacamentoVertical(valor, onde?)",
  descricao: "Define padding superior e inferior, ótimo para blocos com muito texto.",
  itens: [
    "Parâmetro valor (number | string): ex. 12, '2rem'.",
    "Parâmetro onde (opcional): alvo do padding vertical.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: aumentar conforto de leitura sem alterar as laterais."
  ],
  exemplo: `espacamentoVertical(14)
texto("Conteúdo com mais fôlego")`
});

documentarFuncao({
  nome: "espacamentoHorizontal(valor, onde?)",
  descricao: "Define padding esquerdo e direito, mantendo topo/base como estão.",
  itens: [
    "Parâmetro valor (number | string): ex. 24, '4vw'.",
    "Parâmetro onde (opcional): alvo do padding horizontal.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: ajustar largura perceptiva de texto sem mexer em height do bloco."
  ],
  exemplo: `espacamentoHorizontal(24)
texto("Parágrafo com recuo interno lateral")`
});

documentarFuncao({
  nome: "paddingVertical(...) e paddingHorizontal(...)",
  descricao: "São aliases de compatibilidade para espacamentoVertical(...) e espacamentoHorizontal(...). Funcionam igual, mudando apenas o nome.",
  itens: [
    "paddingVertical(valor, onde?) => usa lógica de espacamentoVertical.",
    "paddingHorizontal(valor, onde?) => usa lógica de espacamentoHorizontal.",
    "Retorno: FerramentasEngine encadeável.",
    "Quando usar: quando sua equipe prefere nomenclatura parecida com CSS puro."
  ],
  exemplo: `paddingVertical(10)
paddingHorizontal(20)`
});

documentarFuncao({
  nome: "modo(tipo)",
  descricao: "Define a meta color-scheme do documento para claro ou escuro. Isso orienta o navegador em elementos nativos e na interpretação de tema.",
  itens: [
    "Parâmetro tipo (string): aceita 'claro' ou 'escuro' (outros valores caem em claro).",
    "Efeito: atualiza/cria <meta name='color-scheme'>.",
    "Retorno: sem retorno útil (função de configuração).",
    "Quando usar: no começo do arquivo, junto da configuração inicial da página."
  ],
  exemplo: `modo("escuro")`
});

documentarFuncao({
  nome: "responsivo()",
  descricao: "Ativa base mobile: cria meta viewport e injeta estilo para larguras da engine se adaptarem melhor em telas pequenas.",
  itens: [
    "Adiciona <meta name='viewport' content='width=device-width, initial-scale=1.0'>.",
    "Em telas até 768px, elementos com largura da engine passam a respeitar max-width 100%.",
    "Retorno: sem retorno útil (função de configuração).",
    "Quando usar: sempre no início para evitar retrabalho de layout no celular."
  ],
  exemplo: `modo("claro")
responsivo()
largura(72)`
});

definirId(tituloSecao("Unidade 4 — O que é o parâmetro onde"), "parametro-onde");

paragrafo(
  "O parâmetro onde diz em qual lugar o elemento vai ser colocado. Se você não informar, a Fluxo usa a página inteira. Se você passar um container criado pela própria engine, o elemento entra dentro dele."
);

const areaExemplo = cardPadrao(linha(), "conteudo", "normal");

texto("Esta frase foi colocada dentro de um container.", areaExemplo)
  .cor("azul escuro")
  .tamanho(16);

texto("Este segundo texto também entrou no mesmo bloco.", areaExemplo)
  .cor("verde escuro")
  .tamanho(16);

cardPadrao(blocoCodigo(`const bloco = linha()

texto("Dentro do bloco", bloco)
texto("Outro texto no mesmo lugar", bloco)`), "codigo", "normal");

paragrafo(
  "Isso quer dizer que você pode montar uma área com linha(), guardar o resultado em uma variável e usar esse mesmo resultado como destino para outros elementos."
);

definirId(tituloSecao("Unidade 5 — Como mudar a aparência"), "mudar-aparencia");

paragrafo(
  "Depois de criar um elemento, você pode continuar chamando métodos de estilo. Eles sempre devolvem o mesmo objeto, então o texto pode ficar mais limpo e mais fácil de ler."
);

cardPadrao(blocoCodigo(`texto("Aprendendo com calma")
  .cor("vermelho")
  .tamanho(24)
  .negrito()
  .alinhar("centro")
  .fundo("bege")`), "codigo", "normal");

cardLista(lista([
  "cor(...) muda a cor do texto.",
  "fonte(...) define a família tipográfica do elemento.",
  "tamanho(...) aumenta ou diminui o tamanho.",
  "negrito() deixa o texto forte.",
  "italico() inclina o texto.",
  "sublinhado() e tachado() mudam a decoração.",
  "maiusculo(), minusculo() e capitalizar() alteram as letras.",
  "espacoLetras(...) e alturaLinha(...) ajustam a leitura.",
  "alinhar(...) muda a posição do texto.",
  "fundo(...) muda a cor de fundo.",
  "largura(...) define o espaço ocupado.",
  "margem(...), margemVertical(...) e margemHorizontal(...) ajustam o espaço externo.",
  "espacamento(...), espacamentoVertical(...) e espacamentoHorizontal(...) ajustam o espaço interno."
])
  .tamanho(16), "normal");

paragrafo(
  "Além dos métodos encadeáveis, existem funções avulsas com nomes alternativos para padding: paddingVertical(...) e paddingHorizontal(...). Elas funcionam como atalhos de espacamentoVertical(...) e espacamentoHorizontal(...), mas são chamadas separadamente, não encadeadas."
)
  .tamanho(ESCALA.pequeno)
  .cor("cinza escuro")
  .italico()
  .margemVertical(6);

definirId(tituloSecao("Unidade 6 — Listas sem mistério"), "listas-sem-misterio");

paragrafo(
  "As listas aceitam array de itens ou um texto com uma linha por item. Para iniciantes, use o formato que estiver mais confortável."
);

cardLista(lista([
  "Ler o texto",
  "Copiar o exemplo",
  "Trocar as palavras",
  "Testar no navegador"
])
  .tamanho(ESCALA.lista)
  .cor("azul escuro"), "normal");

cardLista(lista(`
- Criar página
- Colocar título
- Colocar texto
- Colocar botão
`)
  .tamanho(ESCALA.lista)
  .cor("verde escuro"), "normal");

cardLista(listaOrdenada([
  "Abrir o arquivo",
  "Escrever o código",
  "Salvar",
  "Recarregar a página"
])
  .tamanho(ESCALA.lista)
  .cor("marrom"), "normal");

definirId(tituloSecao("Unidade 7 — Botões e ações"), "botoes-e-acoes");

paragrafo(
  "O botão serve para quando você quer que alguma coisa aconteça ao clicar. Na maioria dos casos, a ação começa com alert, troca texto ou chama outra função."
);

const linhaBotoes = cardPadrao(linha());

botao("Mostrar mensagem", () => alert("Você clicou no botão!"), linhaBotoes);
botao("Outra mensagem", () => alert("Outro clique funcionou."), linhaBotoes);
botao("Fechar aviso", () => alert("Tudo certo por aqui."), linhaBotoes);

cardPadrao(blocoCodigo(`botao("Clique aqui", () => {
  alert("Funcionou!")
})`), "codigo", "normal");

definirId(tituloSecao("Unidade 8 — Largura, fonte, fundo, margem e espaçamento"), "largura-fonte-e-fundo");

paragrafo(
  "Essas funções são úteis quando você quer controlar a aparência da página toda ou de um bloco específico."
);

cardLista(lista([
  "largura(60) deixa a página com 60% de largura.",
  "largura(420px) usa um valor fixo do CSS.",
  "fonte(" + '"serifa"' + ") troca a fonte da página.",
  "fundo(" + '"bege"' + ") muda a cor de fundo.",
  "margem(24) aplica 24px de margem em todos os lados.",
  "margemVertical(20) e margemHorizontal(12) controlam os eixos separadamente.",
  "espacamento(16) aplica padding interno em todos os lados.",
  "espacamentoVertical(12) e espacamentoHorizontal(24) refinam o padding por eixo.",
  "paddingVertical(...) e paddingHorizontal(...) fazem a mesma coisa com nome alternativo.",
  "Você também pode passar um container como segundo argumento."
])
  .tamanho(ESCALA.lista), "normal");

const blocoFormato = cardPadrao(linha(), "apoio", "normal");
texto("Este bloco recebeu largura e fonte só nele.", blocoFormato)
  .tamanho(ESCALA.corpo)
  .cor("azul escuro");
fonte("serifa", blocoFormato);

definirId(tituloSecao("Unidade 9 — Modo claro, modo escuro e celular"), "modo-claro-modo-escuro-e-celular");

paragrafo(
  "modo(" + '"claro"' + ") e modo(" + '"escuro"' + ") ajudam a avisar ao navegador qual aparência você prefere. responsivo() prepara a página para telas pequenas."
);

cardLista(lista([
  "Use modo('claro') se a página for clara.",
  "Use modo('escuro') se a página for escura.",
  "Chame responsivo() logo no começo do arquivo.",
  "Se usar largura(...), a própria Fluxo tenta adaptar no celular."
])
  .tamanho(ESCALA.lista), "normal");

definirId(tituloSecao("Unidade 10 — Sistema de headings"), "sistema-de-headings");

paragrafo(
  "Agora você pode criar títulos de seção sem inventar blocos auxiliares no seu próprio arquivo. Use cabecalho(nivel, texto) quando quiser criar um heading HTML de verdade, com h1 até h6."
);

cardLista(lista([
  "cabecalho(1, 'Título principal') => cabeçalho mais forte da página.",
  "cabecalho(2, 'Seção') => ideal para divisões principais do conteúdo.",
  "cabecalho(3, 'Subseção') => útil para partes menores.",
  "h1(...) até h6(...) => atalhos prontos para cada nível.",
  "heading(...) => outro nome para cabecalho(...).",
  "A Fluxo cria a tag certa e deixa o navegador aplicar o estilo padrão do heading."
])
  .tamanho(ESCALA.lista), "normal");

cardLista(lista([
  "Exemplo rápido: h1('Título principal').cor('azul marinho').",
  "Exemplo rápido: h2('Seção').alinhar('centro').",
  "Exemplo rápido: cabecalho(3, 'Parte menor').cor('verde escuro')."
])
  .tamanho(ESCALA.lista), "normal");

h2("Aprendendo com calma")
  .cor("azul marinho")
  .alinhar("centro");

h3("Exemplo real de heading")
  .cor("verde escuro")
  .tamanho(ESCALA.tituloBloco);

paragrafo(
  "Se você só quer fazer uma seção bonita e legível, essa função substitui a necessidade de criar um bloco de texto manual para servir de título."
);

definirId(tituloSecao("Unidade 11 — Nomes alternativos"), "links-e-aliases");

paragrafo(
  "A Fluxo também tem nomes sinônimos para quem prefere outro jeito de escrever. Eles fazem a mesma coisa."
);

cardLista(lista([
  "criarTitulo = titulo",
  "definirTituloPagina = tituloPagina",
  "nomePagina = tituloPagina",
  "tituloDocumento = tituloPagina",
  "heading = cabecalho",
  "h1 = cabecalho(1)",
  "h2 = cabecalho(2)",
  "h3 = cabecalho(3)",
  "h4 = cabecalho(4)",
  "h5 = cabecalho(5)",
  "h6 = cabecalho(6)",
  "escreva = texto",
  "mostrarTexto = texto",
  "criarBotao = botao",
  "listar = lista",
  "listarOrdenado = listaOrdenada",
  "agruparHorizontal = linha",
  "ladoALado = linha",
  "definirLargura = largura",
  "definirFonte = fonte",
  "definirMargem = margem",
  "definirMargemVertical = margemVertical",
  "definirMargemHorizontal = margemHorizontal",
  "definirEspacamento = espacamento",
  "definirEspacamentoVertical = espacamentoVertical",
  "definirEspacamentoHorizontal = espacamentoHorizontal",
  "definirPaddingVertical = espacamentoVertical",
  "definirPaddingHorizontal = espacamentoHorizontal",
  "paddingVertical = espacamentoVertical",
  "paddingHorizontal = espacamentoHorizontal",
  "tema = modo",
  "definirModo = modo",
  "configurarCelular = responsivo",
  "modoCelular = responsivo",
  "criarLink = link",
  "hiperlink = link",
  "ancora = link",
  "indice = link",
  "linkExterno = link"
])
  .tamanho(ESCALA.lista), "normal");

definirId(tituloSecao("Unidade 12 — Receita curta para começar"), "receita-curta-para-comecar");

cardLista(listaOrdenada([
  "Importe as funções da Fluxo.",
  "Chame modo('claro') ou modo('escuro').",
  "Chame responsivo().",
  "Crie um título.",
  "Crie um texto.",
  "Adicione uma lista ou um botão.",
  "Use linha() quando quiser colocar coisas lado a lado."
])
  .tamanho(ESCALA.lista), "normal");

cardPadrao(blocoCodigo(`import { titulo, texto, botao, modo, responsivo } from "@fluxojs/engine"

modo("claro")
responsivo()

titulo("Meu app")
texto("Agora estou criando a minha página.")
botao("Clicar", () => alert("Olá!"))`), "codigo", "normal");

paragrafo(
  "Se você entendeu esta parte, já tem o suficiente para montar uma página simples. Depois disso, é só repetir os exemplos e trocar os textos pelos seus."
)
  .alinhar("centro")
  .cor("cinza escuro");


definirId(tituloSecao("Unidade 13 — Título da aba"), "titulo-da-aba");

paragrafo(
  "Quando você cria o primeiro titulo ou cabeçalho, a Fluxo também usa esse texto como título da aba do navegador. Se quiser mudar isso de forma explícita, use tituloPagina(texto)."
);

cardLista(lista([
  "Sem chamada explícita, o primeiro titulo(), cabecalho() ou h1() define document.title.",
  "Depois disso, novos títulos não trocam o document.title automaticamente.",
  "Se quiser mudar de propósito, chame tituloPagina('Meu título')."
])
  .tamanho(ESCALA.lista), "normal");

definirId(tituloSecao("Unidade 14 — Bastidores do codigo.js"), "bastidores-codigo-js");

paragrafo(
  "Esta unidade documenta as soluções de design e as funções utilitárias usadas no próprio arquivo da apostila. Aqui entra o padrão de cards, o índice e os helpers de estrutura."
);

cardLista(lista([
  "Reutilização tipográfica: ESCALA centraliza todos os tamanhos para evitar números soltos e facilitar ajuste global.",
  "Reutilização visual: cardPadrao concentra tema, largura, padding e margem para qualquer bloco.",
  "Reutilização de listas: cardLista resolve recuo de bolinhas e mantém consistência sem retrabalho.",
  "Reutilização pedagógica: caixaApostila e documentarFuncao transformam padrões repetidos em helpers legíveis.",
  "Reutilização de navegação: definirId + link criam índice com âncoras sem depender de framework."
])
  .tamanho(ESCALA.lista), "normal");

caixaApostila(
  "Potencial para JavaScript avançado",
  "Esta apostila usa uma base didática. Qualquer pessoa experiente em JavaScript pode deixar as páginas muito mais potentes com componentes dinâmicos, estado global, renderização condicional, roteamento, consumo de API, persistência local e animações orientadas a eventos."
);

cardLista(lista([
  "Objetivo do design: manter leitura previsível, com blocos visuais consistentes por tipo de conteúdo.",
  "Objetivo de navegação: permitir salto rápido por seção via links de âncora no índice.",
  "Objetivo de manutenção: centralizar estilo em funções pequenas para evitar repetição e divergência visual."
])
  .tamanho(ESCALA.lista), "normal");

documentarFuncao({
  nome: "ESCALA (objeto de tipografia)",
  descricao: "Mapa único de tamanhos de texto. Em vez de repetir números no arquivo, os estilos consultam ESCALA para manter consistência e simplificar manutenção.",
  itens: [
    "Chaves usadas: tituloPrincipal, tituloSecao, tituloBloco, corpo, lista, codigo e pequeno.",
    "Vantagem: mudanças de tamanho são aplicadas globalmente com baixo risco de inconsistência.",
    "Quando usar: sempre que quiser ajustar ritmo de leitura da página inteira."
  ],
  exemplo: `const ESCALA = { corpo: 16, codigo: 14 }
paragrafo("Texto base").tamanho(ESCALA.corpo)`
});

documentarFuncao({
  nome: "cardPadrao(bloco, tipo?, densidade?)",
  descricao: "Função base de design da apostila. Ela transforma qualquer bloco encadeável em card com tema e espaçamento padronizados.",
  itens: [
    "Parâmetro bloco: elemento criado pela engine (texto, lista, linha, etc.).",
    "Parâmetro tipo: conteudo, apoio, destaque, sumario ou codigo.",
    "Parâmetro densidade: compacto, normal ou conforto.",
    "Efeito: aplica fundo, largura 100%, padding vertical/horizontal e margem vertical consistentes.",
    "Uso recomendado: não estilizar cards manualmente quando já existir combinação no cardPadrao."
  ],
  exemplo: `cardPadrao(texto("Bloco comum"), "conteudo", "normal")`
});

documentarFuncao({
  nome: "documentarFuncao({ nome, descricao, itens, exemplo })",
  descricao: "Template reutilizável para documentação de API. A função cria um mini-bloco completo com título, descrição, lista de pontos e exemplo de código.",
  itens: [
    "Padroniza formato de explicação para todas as funções documentadas.",
    "Reduz duplicação estrutural no arquivo de tutorial.",
    "Permite adicionar novas funções na documentação com poucos parâmetros."
  ],
  exemplo: `documentarFuncao({
  nome: "novaFuncao()",
  descricao: "O que faz.",
  itens: ["Ponto 1", "Ponto 2"],
  exemplo: "novaFuncao()"
})`
});

documentarFuncao({
  nome: "cardLista(bloco, densidade?)",
  descricao: "Helper específico para listas da apostila: mantém cor única de conteúdo e dobra o espaçamento horizontal para compensar o recuo natural das bolinhas.",
  itens: [
    "Parâmetro bloco: lista(...) ou listaOrdenada(...).",
    "Parâmetro densidade: compacto, normal ou conforto.",
    "Efeito principal: usa cardPadrao com tipo conteudo + padding horizontal reforçado.",
    "Quando usar: sempre que o bloco tiver marcadores/numeração para manter alinhamento visual consistente."
  ],
  exemplo: `cardLista(lista(["Item A", "Item B"]).tamanho(16), "normal")`
});

documentarFuncao({
  nome: "caixaApostila(tituloCaixa, conteudo)",
  descricao: "Cria uma caixa pedagógica pronta para orientações, avisos de estudo e checklists. Internamente usa cardPadrao com tema de apoio.",
  itens: [
    "Parâmetro tituloCaixa (string): título do bloco, com destaque tipográfico.",
    "Parâmetro conteudo (string): texto principal da orientação.",
    "Retorno: FerramentasEngine do container, para estilos extras quando necessário.",
    "Quando usar: abertura de unidade, tarefa rápida, checklist de revisão."
  ],
  exemplo: `caixaApostila("Tarefa", "Implemente uma seção com título e lista.")`
});

documentarFuncao({
  nome: "destaque(conteudo, onde?)",
  descricao: "Atalho para criar um card de destaque visual com tom de atenção positiva, sem repetir configuração de estilo toda vez.",
  itens: [
    "Parâmetro conteudo (string): mensagem de destaque.",
    "Parâmetro onde (opcional): destino do bloco.",
    "Tema aplicado: tipo destaque com densidade conforto.",
    "Quando usar: dica importante, alerta amigável e reforço de conceito-chave."
  ],
  exemplo: `destaque("Dica: quebre problemas grandes em blocos menores.")`
});

documentarFuncao({
  nome: "definirId(elemento, id)",
  descricao: "Helper de navegação que aplica id no elemento criado pela engine, viabilizando âncoras de índice com link('#id').",
  itens: [
    "Parâmetro elemento: objeto encadeável retornado pela engine (contém .elemento).",
    "Parâmetro id (string): identificador único da seção.",
    "Retorno: o mesmo elemento, para continuar encadeando se quiser.",
    "Quando usar: em títulos de unidade e seções que devem aparecer no índice."
  ],
  exemplo: `definirId(tituloSecao("Unidade X"), "unidade-x")`
});

documentarFuncao({
  nome: "Índice da apostila (indice + link)",
  descricao: "A navegação do topo é montada com um container de sumário e links de âncora. Isso cria um mini sistema de navegação interna sem framework.",
  itens: [
    "indice: container criado com cardPadrao(linha(), 'sumario', 'conforto').",
    "Cada item usa link('Título', '#id-da-secao', indice).",
    "As seções de destino recebem id via definirId(...).",
    "Benefício: leitura não linear, com acesso rápido a qualquer unidade."
  ],
  exemplo: `const indice = cardPadrao(linha(), "sumario", "conforto")
link("Unidade 1", "#ideia-principal", indice)
definirId(tituloSecao("Unidade 1"), "ideia-principal")`
});

caixaApostila(
  "Checklist final da apostila",
  "Você consegue: criar títulos, textos, listas, botões, links, controlar layout com largura/margem/padding e preparar o projeto para celular com responsivo()."
);

definirId(tituloSecao("Unidade 15 — Referência de nomes"), "referencia-de-nomes");

paragrafo(
  "A Fluxo aceita nomes amigáveis em português para cores, fontes e alinhamentos. Esta unidade lista todos os valores disponíveis para facilitar a consulta durante o desenvolvimento."
);

passoSecao("Nomes de cores disponíveis");

paragrafo(
  "Use esses nomes nas funções cor(...) e fundo(...). Se o nome tiver espaço, você pode escrever com ou sem espaço — a Fluxo normaliza automaticamente."
);

cardLista(
  lista([
    "preto — black",
    "branco — white",
    "cinza — gray",
    "cinza claro — lightgray",
    "azul — blue",
    "azul claro — lightblue",
    "azul escuro — darkblue",
    "azul marinho — navy",
    "verde — green",
    "verde claro — lightgreen",
    "verde escuro — darkgreen",
    "verde limão — lime",
    "vermelho — red",
    "vermelho escuro — darkred",
    "rosa — pink",
    "rosa choque — deeppink",
    "amarelo — yellow",
    "ouro — gold",
    "laranja — orange",
    "roxo — purple",
    "marrom — brown",
    "bege — beige",
    "ciano — cyan",
    "transparente — transparent"
  ]).tamanho(ESCALA.lista),
  "normal"
);

cardPadrao(
  blocoCodigo(`titulo("Meu projeto")
  .cor("azul marinho")

fundo("bege")
texto("Destaque").cor("verde escuro")`),
  "codigo",
  "normal"
);

passoSecao("Nomes de fontes disponíveis");

paragrafo(
  "Use esses nomes na função fonte(...) chamada de forma avulsa ou encadeada. Você também pode passar qualquer valor CSS válido de font-family."
);

cardLista(
  lista([
    "sistema — fonte padrão do sistema operacional (system-ui, -apple-system, Segoe UI, etc.)",
    "serifa — fonte com serifa clássica (Georgia, serif)",
    "sem serifa — fonte sem serifa limpa (Arial, sans-serif)",
    "maquina — fonte monoespaçada de código ('Courier New', monospace)",
    "cursiva — fonte manuscrita decorativa ('Brush Script MT', cursive)"
  ]).tamanho(ESCALA.lista),
  "normal"
);

cardPadrao(
  blocoCodigo(`fonte("serifa")
fonte("maquina", bloco)
texto("Código").fonte("maquina")`),
  "codigo",
  "normal"
);

passoSecao("Nomes de alinhamento disponíveis");

paragrafo(
  "Use esses nomes na função encadeável alinhar(...). O valor é normalizado automaticamente, então espaços e maiúsculas não importam."
);

cardLista(
  lista([
    "esquerda — alinha à esquerda (left)",
    "direita — alinha à direita (right)",
    "centro — centraliza (center)",
    "centralizado — mesmo efeito que centro (center)",
    "justificado — distribui o texto nas margens (justify)"
  ]).tamanho(ESCALA.lista),
  "normal"
);

cardPadrao(
  blocoCodigo(`titulo("Título").alinhar("centro")
texto("Parágrafo longo").alinhar("justificado")`),
  "codigo",
  "normal"
);

caixaApostila(
  "Dica de consulta",
  "Guarde esta unidade como referência rápida. Sempre que não lembrar o nome de uma cor ou fonte, volte aqui antes de pesquisar em outro lugar."
);

paragrafo("Fim da apostila • Próximo passo: montar um mini projeto autoral com 3 seções e navegação por índice.")
  .alinhar("centro")
  .italico()
  .tamanho(ESCALA.pequeno)
  .margemVertical(20);