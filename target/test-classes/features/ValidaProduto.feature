#language: pt
#/**
# * Autor: Henrique Magalhaes
# * Data: 31/05/2020
# */
Funcionalidade: Validacao de fluxo de produto

O sistema deve se comportar de forma correta tanto da 
busca de um produto quanto sua adição no carrinho.


  @Regressao @carrinho
  Cenario: Testar busca e carrinho
      Dado que o site da americanas foi acessado com sucesso
      E o texto da busca de produtos foi populado corretamente
      Quando o botao de busca e acionado
      E o produto e selecionado no resultado da busca
      E e adicionado no carrinho
      Entao quando o carrinho e acessado o produto aparece corretamente
      
	@Regressao @remover
  Cenario: Testar remocao do carrinho
      Dado que o site da americanas foi acessado com sucesso
      E o texto da busca de produtos foi populado corretamente
      Quando o botao de busca e acionado
      E o produto e selecionado no resultado da busca
      E e adicionado no carrinho
      E quando o carrinho e acessado o produto e removido
      Entao o carrinho fica vazio

