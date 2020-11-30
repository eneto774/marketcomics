# 📕 MarketComic
<h1 align="center">
	<img alt="GoStack" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1280px-MarvelLogo.svg.png" width="200px" />
</h1>
<p align="center">
	<a href="https://www.linkedin.com/in/ribeiro-edgar/" target="_blank" rel="noopener noreferrer"><img alt="Made by" src="https://img.shields.io/badge/made%20by-Edgar%20Ribeiro-%23FF2800"></a>
  <a href="https://github.com/eneto774/marketcomics/blob/master/README.md"><img alt="GitHub" src="https://img.shields.io/github/license/eneto774/marketcomics?color=%23FF2800"></a>
</p>

<p align="center">
<img alt="App Image" src="https://uploaddeimagens.com.br/images/002/983/350/full/Captura_de_tela_2020-11-29_132308.png?1606667065">
</p>

---
## Rodando a aplicação
Clone o Repositório

`git clone https://github.com/eneto774/marketcomics.git`

Acesse a pasta do projeto

`cd marketcomics`

Baixando Dependencias

`npm install`

Rodando o projeto

`ng serve`

---
## Tecnologias Utilizadas


<p align="center">
	<a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular<br><img width="200" alt="Angular" src="https://angular.io/assets/images/logos/angular/angular.svg"></a><br>
  <a href="https://www.typescriptlang.org/">Typescript<br><img width="200" alt="Type Script" src="https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"></a>
</p>

---

## 📖 Proposta

Crie uma Single Page Application (Angular 10) de uma loja de quadrinhos utilizando a API da Marvel para todos os consumos de dados.

### Requisitos Funcionais

* Tela de lista de quadrinhos
* Tela de detalhe do quadrinho (comics)
* Funcionalidade de checkout dos quadrinhos adicionados

### Requisitos Não Funcionais

* 10% dos quadrinhos carregados devem ser marcados como raros
* O checkout deve contemplar a opcão de código de desconto
* Faça um rest simulado (mock) para receber cupons de desconto na App
* Existem dois tipos de cupons: Cupons raros e cupons comuns. Cupons comuns dão desconto somente para quadrinhos comuns enquanto raros podem ser usados em qualquer tipo

---

## 💻 Sobre a Aplicação

A aplicação tem exatamente 4 rotas, lista de quadrinhos, carrinho de compra, finalização da compra e detalhe do quadrinho selecionado,a lista de todos os quadrinhos da API fica na rota raiz agrupando 20 quadrinhos a cada pagina, você pode adicionar um ou mais quadrinhos ao carrinho ee visualizar os detalhes do quadrinho de escolha.
Na rota do carrinho de compra, ele trás as opções de preenchimento do cupom de desconto, lista de quadrinhos adicionados e o valor total do carrinho, tendo as opções de continuar comprando onde a mesma retorna para a rota raiz onde tem a lista de quadrinhos, temos botões para esvaziar carrinho limpa todo carrinho excluindo todos os itens, finalizar compra que redireciona para uma rota com mensagem de sucesso, limpa o carrinho e disponibiliza um botão para voltar a rota raiz.
Na rota de visualização dos detalhes do quadrinho, disponibiliza informações do quadrinho como também a opção de adicionar ao carrinho, e a opção de voltar para a lista de quadrinhos.

Foram criados dois serviços, sendo eles o serviço de API e de carrinho, o serviço de API fica responsável por armazenar todos os dados e métodos que seriam utilizados para fazer requisições na API, enquanto o serviço de carrinho disponibiliza variáveis e métodos para injetarmos em componentes instanciando somente uma vez em toda a aplicação e mantendo a informação atualizada mesmo que em componentes diferentes, para armazenamento dos dados do carrinho eu utilizei o local storage, evitando que quando o usuário atualizasse a pagina zerasse o estado do carrinho de compras, mantendo o mesmo ainda que o usuário saia da pagina e retorne.
Quadrinhos raros recebem o prefixo "[RARA]" no seu titulo e seu background é modificado para uma cor de destaque, sendo que 10% dos quadrinhos são marcados como raros assim que a requisição é feita.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤ &nbsp;by Edgar Ribeiro 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/ribeiro-edgar/)
