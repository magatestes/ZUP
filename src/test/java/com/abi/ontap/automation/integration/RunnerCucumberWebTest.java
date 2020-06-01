package com.abi.ontap.automation.integration;



import org.junit.runner.RunWith;

import com.abi.ontap.automation.anotations.AfterSuite;
import com.abi.ontap.automation.anotations.BeforeSuite;
import com.abi.ontap.automation.anotations.ExtendedCucumberRunner;
import com.abi.ontap.automation.driver.DriverWeb;

import cucumber.api.CucumberOptions;


@RunWith(ExtendedCucumberRunner.class)
@CucumberOptions(features = "src/test/resources/features/ValidaProduto.feature", plugin = {
		"json:src/test/resources/cucumber-report/Resultado.json", "rerun:src/test/resources/falhas/rerun.txt",
		"junit:src/test/resources/junit-report/Resultado.xml", "html:src/test/resources/cucumber-report/" },


		tags = { "@remover" }, 
		glue = { "com.abi.ontap.automation.integration.stepdefs" },
		monochrome = true, dryRun = false, strict = false)

public class RunnerCucumberWebTest {

	@BeforeSuite
	public static void metodoInicial() {

	}

	@AfterSuite
	public static void metodoFinal() {
		DriverWeb.killDriver();

	}

	}
