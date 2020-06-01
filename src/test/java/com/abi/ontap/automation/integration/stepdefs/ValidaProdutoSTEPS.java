package com.abi.ontap.automation.integration.stepdefs;

import java.io.IOException;

import com.abi.ontap.automation.driver.DriverWeb;
import com.abi.ontap.automation.integration.basepage.ValidaProdutoBASE;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class ValidaProdutoSTEPS extends ValidaProdutoBASE {
	
	public ValidaProdutoSTEPS() throws IOException {
		super(DriverWeb.getDriver());

	}
	
	@Dado("^que o site da americanas foi acessado com sucesso$")
	public void que_o_site_da_americanas_foi_acessado_com_sucesso() throws Throwable {
		this.acessa_home();
	}

	@Dado("^o texto da busca de produtos foi populado corretamente$")
	public void o_texto_da_busca_de_produtos_foi_populado_corretamente() throws Throwable {
	    this.popula_busca();
	}

	@Quando("^o botao de busca e acionado$")
	public void o_botao_de_busca_e_acionado() throws Throwable {
		this.acessa_busca();
	}

	@Quando("^o produto e selecionado no resultado da busca$")
	public void o_produto_e_selecionado_no_resultado_da_busca() throws Throwable {
		this.seleciona_produto();
	}

	@Quando("^e adicionado no carrinho$")
	public void e_adicionado_no_carrinho() throws Throwable {
	   this.adiciona_carrinho();
	}

	@Entao("^quando o carrinho e acessado o produto aparece corretamente$")
	public void quando_o_carrinho_e_acessado_o_produto_aparece_corretamente() throws Throwable {
	    this.valida_carrinho();
	}
	
	@Quando("^quando o carrinho e acessado o produto e removido$")
	public void quando_o_carrinho_e_acessado_o_produto_e_removida() throws Throwable {
		this.remove_carrinho();
	}

	@Entao("^o carrinho fica vazio$")
	public void o_carrinho_fica_vazio() throws Throwable {
	    this.valida_carrinho_vazio();
	}
	
}
