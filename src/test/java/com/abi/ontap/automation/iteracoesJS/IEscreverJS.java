package com.abi.ontap.automation.iteracoesJS;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import com.abi.ontap.automation.driver.DriverWeb;
import com.abi.ontap.automation.iteracoesWeb.IEncontraTipoElementoWeb;


public interface IEscreverJS extends IEncontraTipoElementoWeb{
	/**
	 * @Descricao Escrever
	 * @param elemento
	 * @param texto
	 */
	default void escreverJavascript(String elemento, String texto) {
		WebElement element = encontra(elemento);
		JavascriptExecutor executor = (JavascriptExecutor) DriverWeb.getDriver();
		executor.executeScript("arguments[0].value=" + texto + ";", element);
	}
}