package com.abi.ontap.automation.utils;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;


public class TakeScreenshotUtils {

    public static void takeSnapShot(WebDriver webdriver, String fileWithPath) throws IOException {

        //Convert web driver object to TakeScreenshot

        TakesScreenshot scrShot = ((TakesScreenshot) webdriver);

        //Call getScreenshotAs method to create image file

        File SrcFile = scrShot.getScreenshotAs(OutputType.FILE);



        //Move image file to new destination

        File DestFile = new File("./snapshots/" + fileWithPath + "_" + DateUtils.getCurrentDate("yyyyMMdd_hhmmss") + ".png");

        //Copy file at destination

        FileUtils.copyFile(SrcFile, DestFile);

    }
}

