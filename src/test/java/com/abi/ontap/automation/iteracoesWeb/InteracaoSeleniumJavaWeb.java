package com.abi.ontap.automation.iteracoesWeb;


import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.abi.ontap.automation.iteracoesJS.ICliqueJS;
import com.abi.ontap.automation.iteracoesJS.IEscreverJS;
import com.abi.ontap.automation.iteracoesJS.IMoverJS;
import com.abi.ontap.automation.iteracoesJS.IObterJS;
import com.abi.ontap.automation.iteracoesJS.IRolarJS;



/**
 * @author Paulo Lobo Neto
 * @Descricao Classe respons�vel por conter comandos que executam intera��es com
 *            a p�gina da web. Os m�todos contidos na classe s�o todos p�blicos
 *            e para utiliz�-la, � necess�rio passar o WebDriver como par�metro
 */
public class InteracaoSeleniumJavaWeb implements IAlert, IAcoesBrowser, IArrastar, IClique, ICliqueJS, ICombo,
		IEscrever, IEscreverJS, IEspera, IFrame, ILimpar, IMover, IMoverJS, IObter, IObterJS, IProcurar, IRolarJS,
		IEncontraTipoElementoWeb, IValidacoesWeb {

	public static String nomePlataformaDeExecucao;

	public InteracaoSeleniumJavaWeb(WebDriver webDriver) {

	}
	
	/**
	 * @author Felipe Louren�o
	 * @Descricao Esperar o GIF desaparecer da tela
	 * 
	 */
	
	public void aguardarGif(String elemento) {
		boolean isVisible = verificarElementExibido(elemento);

		try {
			while (isVisible) {
				isVisible = verificarElementExibido(elemento);

				if (!isVisible) {
					System.out.println("tela carregada");
					break;
				}
			}
		} catch (Exception exc) {
			System.out.println("Gif n�o encontrado");
		}
	}

	/**
	 * @author Felipe Louren�o
	 * @Descricao Alterar CNPJ do campo Estabelecimento
	 * @param elemento
	 *            elemento do GIF, clica no combo e clica no Estabelecimento
	 *            especifico.
	 */

	public void alterarCNPJ(String elemento1, String elemento2, String elemento3)
			throws IOException, InterruptedException {
		aguardarGif(elemento1);
		clicar("id", elemento2);
		Thread.sleep(5000);
		clicar("xpath", elemento3);
	}
	/**
	 * @author Felipe Louren�o
	 * @Descricao Alterar CNPJ do campo Estabelecimento
	 * @param elemento
	 *            elemento do GIF, clica no combo e clica no Estabelecimento
	 *            especifico.
	 */

	public void alterarCNPJArv(String elemento,String elemento3)
			throws IOException, InterruptedException {
		clicar("id", elemento);
		Thread.sleep(5000);
		clicar("xpath", elemento3);
	}
}
