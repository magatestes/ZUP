package com.abi.ontap.automation.factory;

import java.util.List;

import org.apache.commons.collections4.CollectionUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class WebDriverFactory {

    public enum AvailableBrowsers {
        CHROME,
        FIREFOX
    }

    private static WebDriver webDriver;

    public static WebDriver getWebDriver(AvailableBrowsers browser, List<String> webDriverOptionsList) {

        if (webDriver == null) {
            switch (browser) {
                case FIREFOX:
                    FirefoxOptions firefoxOptions = new FirefoxOptions();
                    if (!CollectionUtils.isEmpty(webDriverOptionsList)) {
                        webDriverOptionsList.forEach(option -> firefoxOptions.addArguments(option));
                    }
                    webDriver = new FirefoxDriver (firefoxOptions);
                    break;
                default:
                    ChromeOptions chromeOptions = new ChromeOptions();
                    if (!CollectionUtils.isEmpty(webDriverOptionsList)) {
                        webDriverOptionsList.forEach(option -> chromeOptions.addArguments(option));
                    }
                    webDriver = new ChromeDriver(chromeOptions);
            }
        }

        return webDriver;

    }

    public static void quitWebDriver() {
        webDriver.quit();
        webDriver = null;
    }
}
