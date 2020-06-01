package com.abi.ontap.automation.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils extends org.apache.commons.lang3.time.DateUtils {

    public static String getCurrentDate(String strDateFormat) {

        DateFormat dateFormat = new SimpleDateFormat(strDateFormat);

        return dateFormat.format(new Date());
    }
}
