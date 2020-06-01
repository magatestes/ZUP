$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ValidaProduto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#/**"
    },
    {
      "line": 3,
      "value": "# * Autor: Henrique Magalhaes"
    },
    {
      "line": 4,
      "value": "# * Data: 31/05/2020"
    },
    {
      "line": 5,
      "value": "# */"
    }
  ],
  "line": 6,
  "name": "Validacao de fluxo de produto",
  "description": "\nO sistema deve se comportar de forma correta tanto da \nbusca de um produto quanto sua adi��o no carrinho.",
  "id": "validacao-de-fluxo-de-produto",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 22,
  "name": "Testar remocao do carrinho",
  "description": "",
  "id": "validacao-de-fluxo-de-produto;testar-remocao-do-carrinho",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@Regressao"
    },
    {
      "line": 21,
      "name": "@remover"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "que o site da americanas foi acessado com sucesso",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "o texto da busca de produtos foi populado corretamente",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o botao de busca e acionado",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "o produto e selecionado no resultado da busca",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "e adicionado no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "quando o carrinho e acessado o produto e removido",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "o carrinho fica vazio",
  "keyword": "Entao "
});
formatter.match({
  "location": "ValidaProdutoSTEPS.que_o_site_da_americanas_foi_acessado_com_sucesso()"
});
formatter.result({
  "duration": 12842076900,
  "status": "passed"
});
formatter.match({
  "location": "ValidaProdutoSTEPS.o_texto_da_busca_de_produtos_foi_populado_corretamente()"
});
formatter.result({
  "duration": 2473203800,
  "status": "passed"
});
formatter.match({
  "location": "ValidaProdutoSTEPS.o_botao_de_busca_e_acionado()"
});
formatter.result({
  "duration": 2352101500,
  "status": "passed"
});
formatter.match({
  "location": "ValidaProdutoSTEPS.o_produto_e_selecionado_no_resultado_da_busca()"
});
formatter.result({
  "duration": 5309582200,
  "status": "passed"
});
formatter.match({
  "location": "ValidaProdutoSTEPS.e_adicionado_no_carrinho()"
});
formatter.result({
  "duration": 15583041000,
  "status": "passed"
});
formatter.match({
  "location": "ValidaProdutoSTEPS.quando_o_carrinho_e_acessado_o_produto_e_removida()"
});
formatter.result({
  "duration": 8525546400,
  "status": "passed"
});
formatter.match({
  "location": "ValidaProdutoSTEPS.o_carrinho_fica_vazio()"
});
formatter.result({
  "duration": 1159394300,
  "status": "passed"
});
});