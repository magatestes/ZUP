package com.abi.ontap.automation.iteracoesJS;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import com.abi.ontap.automation.driver.DriverWeb;
import com.abi.ontap.automation.iteracoesWeb.IEncontraTipoElementoWeb;


public interface IMoverJS extends IEncontraTipoElementoWeb{
	/**
	 * @Descricao Mover para o elemento
	 * @param elemento
	 */
	default void moverParaOelementoJavascript(String elemento) {
		WebElement element = encontra(elemento);
		JavascriptExecutor executor = (JavascriptExecutor) DriverWeb.getDriver();
		executor.executeScript("arguments[0].scrollIntoView(true);", element);
	}
}