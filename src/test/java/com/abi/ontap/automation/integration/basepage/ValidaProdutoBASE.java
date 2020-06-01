package com.abi.ontap.automation.integration.basepage;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.abi.ontap.automation.driver.DriverWeb;
import com.abi.ontap.automation.iteracoesWeb.InteracaoSeleniumJavaWeb;

/**
 * @author User
 *
 */
public class ValidaProdutoBASE extends InteracaoSeleniumJavaWeb {

	Log logger = LogFactory.getLog(ValidaProdutoBASE.class);

	// declaração de variáveis

	public static String url_inicial  = "https://www.americanas.com.br/";
	public static String campo_buscar_id = "h_search-input";
	public static String btn_buscar_id = "h_search-btn";
	public static String txt_produto = "Motorola Moto Z2 Play";
	public static String resultado_busca_xpath = "//*[contains(text(),'Smartphone Motorola Moto Z2 Play Gamepad  Edition Dual Chip Android 7.0 Tela 5.5\" Octa-Core 64GB Wi-Fi 4G Câmera 12MP - Platinum')]";
	public static String btn_comprar_id = "btn-buy";
	public static String btn_continuar_id = "btn-continue";
	public static String btn_continuar2_xpath = "//div[@class='basket-summary']//button";
	public static String btn_home_class = "brd-logo default";
	public static String btn_home_inicial_id = "bhf_icon-logo";
	public static String btn_carrinho_class = "crt-icon";
	public static String btn_ver_carrinho_xpath = "//div[@class='crt-bottom']//a";
	public static String produto_carrinho_xpath = "//*[contains(text(),'Moto Z2 Play - Game Edition - Platinum')]";
	public static String remover_produto_xpath = "//*[@class='basket-productRemoveAct link-primary --desktop']";
	public static String cesta_vazia_xpath = "//*[contains(text(),'Sua cesta está vazia')]";
	
	WebElement elemento_tmp = null;
	
	public ValidaProdutoBASE(WebDriver driver) throws IOException {
		super(driver);

	}

	public void acessa_home() throws InterruptedException {
		DriverWeb.getDriver().get(url_inicial);
		elemento_tmp = DriverWeb.getDriver().findElement(By.id(btn_home_inicial_id));
		assertTrue(this.elementExiste(btn_home_inicial_id));
	}
	
	public void popula_busca() throws InterruptedException {
		DriverWeb.getDriver().findElement(By.id(campo_buscar_id)).sendKeys(txt_produto);
	}
	
	public void acessa_busca() throws InterruptedException {
		DriverWeb.getDriver().findElement(By.id("h_search-btn")).click();
	}
	
	public void seleciona_produto() throws InterruptedException {
		DriverWeb.getDriver().findElement(By.xpath(resultado_busca_xpath)).click();
	}
	
	public void adiciona_carrinho() throws InterruptedException {
		DriverWeb.getDriver().findElement(By.id(btn_comprar_id)).click();
		DriverWeb.getDriver().findElement(By.id(btn_continuar_id)).click();
		DriverWeb.getDriver().findElement(By.xpath(btn_continuar2_xpath)).click();
		DriverWeb.getDriver().get(url_inicial);	
	}
	
	public void valida_carrinho() throws InterruptedException {
		DriverWeb.getDriver().findElement(By.className(btn_carrinho_class)).click();
		Thread.sleep(5000);
		DriverWeb.getDriver().findElement(By.xpath(btn_ver_carrinho_xpath)).click();
		assertTrue(DriverWeb.getDriver().findElement(By.xpath(produto_carrinho_xpath)).isDisplayed());
	}
	
	public void remove_carrinho() throws InterruptedException {
		DriverWeb.getDriver().findElement(By.className(btn_carrinho_class)).click();
		Thread.sleep(5000);
		DriverWeb.getDriver().findElement(By.xpath(btn_ver_carrinho_xpath)).click();
		DriverWeb.getDriver().findElement(By.xpath(remover_produto_xpath)).click();
	}
	
	public void valida_carrinho_vazio() throws InterruptedException {
		assertTrue(DriverWeb.getDriver().findElement(By.xpath(cesta_vazia_xpath)).isDisplayed());
	}
	

	

}
