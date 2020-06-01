$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/com/abi/ontap/automation/integration/VisitPlanner_OTE_45701.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: en"
    },
    {
      "line": 2,
      "value": "#/**"
    },
    {
      "line": 3,
      "value": "# * Autor: Fernando Lisboa"
    },
    {
      "line": 4,
      "value": "# * Empresa: Taking"
    },
    {
      "line": 5,
      "value": "# * Data: 27/06/2019"
    },
    {
      "line": 6,
      "value": "# * Caminho: Portal Sales Force"
    },
    {
      "line": 7,
      "value": "# */"
    }
  ],
  "line": 8,
  "name": "Recurring Visits frequency",
  "description": "",
  "id": "recurring-visits-frequency",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 13,
      "value": "#@47764 @49794 @Regressao45701"
    },
    {
      "line": 14,
      "value": "# Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 15,
      "value": "#   And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 16,
      "value": "#   And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 17,
      "value": "#   And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 18,
      "value": "#   And On the On field select onRigth\"\u003conRigth\u003e\""
    },
    {
      "line": 19,
      "value": "#   And On the On field select Specific Day \"\u003cspecificDay\u003e\""
    },
    {
      "line": 20,
      "value": "#   And On the Every Month field select a number \"\u003cevery\u003e\""
    },
    {
      "line": 21,
      "value": "#   And On the On field select \"\u003cseries_end_date_on\u003e\""
    },
    {
      "line": 22,
      "value": "#   When Click on Create Visits"
    },
    {
      "line": 23,
      "value": "#   Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 24,
      "value": "#"
    },
    {
      "line": 25,
      "value": "#   Examples:"
    },
    {
      "line": 26,
      "value": "#     | Scenario | DescricaoDoCenario           | frequency | function | regions    | districts  | onRigth     | specificDay | every |"
    },
    {
      "line": 27,
      "value": "#     | CT.47764 | Recurring Visits Frequency - | Monthly   | Monthly  | Accra East | Accra East | Every Month | Specific Day |     1 |"
    },
    {
      "line": 28,
      "value": "#  @49855 @Regressao45701"
    },
    {
      "line": 29,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 30,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 31,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 32,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 33,
      "value": "#    And On the On field select onRigth\"\u003conRigth\u003e\""
    },
    {
      "line": 34,
      "value": "#    And On the On field select Specific Day \"\u003cspecificDay\u003e\""
    },
    {
      "line": 35,
      "value": "#   And On the Every field select a day on calendar \"\u003cdate\u003e\""
    },
    {
      "line": 36,
      "value": "#    And On the Every Month field select a number \"\u003cevery\u003e\""
    },
    {
      "line": 37,
      "value": "#    And On the Series End Date field select \"\u003cenable\u003e\""
    },
    {
      "line": 38,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 39,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 40,
      "value": "#"
    },
    {
      "line": 41,
      "value": "#    Examples:"
    },
    {
      "line": 42,
      "value": "#      | Scenario | DescricaoDoCenario | frequency | series_end_date_on | date       | every | enable | function                                               | specificDay  | regions    | districts  | onRigth     |"
    },
    {
      "line": 43,
      "value": "#      | CT.49855 | Recurring Visits Frequency -  | Monthly   | on                 | 01/01/2019 |     2 | On     | Monthly - Every Month - Specific Day - Series End Date | Specific Day | Accra East | Accra East | Every Month |"
    },
    {
      "line": 44,
      "value": "# @49856 @Regressao45701"
    },
    {
      "line": 45,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 46,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 47,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 48,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 49,
      "value": "#    And On the On field select onRigth\"\u003conRigth\u003e\""
    },
    {
      "line": 50,
      "value": "#    And On the Every Month field select a number \"\u003cevery\u003e\""
    },
    {
      "line": 51,
      "value": "#    And On the Available field select a weekday and click on the arrow to include on the Chosen field \"\u003cday\u003e\""
    },
    {
      "line": 52,
      "value": "#    And On the Every field select a day on calendar \"\u003cdate\u003e\""
    },
    {
      "line": 53,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 54,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 55,
      "value": "#"
    },
    {
      "line": 56,
      "value": "#    Examples:"
    },
    {
      "line": 57,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | day | function | regions    | districts  | onRigth  | every |"
    },
    {
      "line": 58,
      "value": "#      | CT.49856 | Recurring Visits Frequency - | Weekly    | Su  | Weekly   | Accra East | Accra East | Every... |     1 |"
    },
    {
      "line": 59,
      "value": "#"
    },
    {
      "line": 60,
      "value": "# @50642 @49794 @Regressao45701"
    },
    {
      "line": 61,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 62,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 63,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 64,
      "value": "#    And Select the \"\u003cfrequency\u003e\" on the On field select \"\u003cOn\u003e\" and on the Every field select the number \"\u003cfrequency\u003e\", \"\u003cevery\u003e\""
    },
    {
      "line": 65,
      "value": "#    And On the Every field select a day on calendar \"\u003cdate\u003e\""
    },
    {
      "line": 66,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 67,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 68,
      "value": "#"
    },
    {
      "line": 69,
      "value": "#    Examples:"
    },
    {
      "line": 70,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | function         | On    | every | regions    | districts  |"
    },
    {
      "line": 71,
      "value": "#      | CT.50642 | Recurring Visits Frequency - | Daily     | Daily - Everyday | Every |     1 | Accra East | Accra East |"
    },
    {
      "line": 72,
      "value": "#       | CT.49794 | Recurring Visits Frequency - | Daily     | Daily            | Every...|     | Accra East | Accra East |"
    },
    {
      "line": 73,
      "value": "# @50643 @Regressao45701"
    },
    {
      "line": 74,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 75,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 76,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 77,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 78,
      "value": "#    And On the \"On\" field select \"\u003cOn\u003e\""
    },
    {
      "line": 79,
      "value": "#     And On the Every field select a day on calendar \"\u003cdate\u003e\""
    },
    {
      "line": 80,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 81,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 82,
      "value": "#"
    },
    {
      "line": 83,
      "value": "#    Examples:"
    },
    {
      "line": 84,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | function         | On            | regions    | districts  |"
    },
    {
      "line": 85,
      "value": "#      | CT.50643 | Recurring Visits Frequency - | Daily     | Daily - Everyday | Every WeekDay | Accra East | Accra East |"
    },
    {
      "line": 86,
      "value": "#"
    },
    {
      "line": 87,
      "value": "#@50645 @Regressao45701"
    },
    {
      "line": 88,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 89,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 90,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 91,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 92,
      "value": "#    And On the \"On\" field select \"\u003cOn\u003e\""
    },
    {
      "line": 93,
      "value": "#    And on the Every field select the number \"\u003cfrequency\u003e\", \"\u003cevery\u003e\""
    },
    {
      "line": 94,
      "value": "#    And On the Every field select a day on calendar \"\u003cdate\u003e\""
    },
    {
      "line": 95,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 96,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 97,
      "value": "#"
    },
    {
      "line": 98,
      "value": "#    Examples:"
    },
    {
      "line": 99,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | function         | On    | regions    | districts  | every |"
    },
    {
      "line": 100,
      "value": "#      | CT.50645 | Recurring Visits Frequency - | Daily     | Daily - Everyday | Every... | Accra East | Accra East |     1 |"
    },
    {
      "line": 101,
      "value": "#@50646 @Regressao45701"
    },
    {
      "line": 102,
      "value": "#Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 103,
      "value": "#  And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 104,
      "value": "#  And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 105,
      "value": "#  And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 106,
      "value": "#  And On the \"On\" field select \"\u003cOn\u003e\""
    },
    {
      "line": 107,
      "value": "#  And on the Every field select the number \"\u003cfrequency\u003e\", \"\u003cevery\u003e\""
    },
    {
      "line": 108,
      "value": "#  And On the Series End Date field select \"\u003cseriesEndDate\u003e\""
    },
    {
      "line": 109,
      "value": "#  And On the On field select \"\u003cseries_end_date_on\u003e\""
    },
    {
      "line": 110,
      "value": "#  When Click on Create Visits"
    },
    {
      "line": 111,
      "value": "#  Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 112,
      "value": "#"
    },
    {
      "line": 113,
      "value": "#  Examples:"
    },
    {
      "line": 114,
      "value": "#    | Scenario | DescricaoDoCenario           | frequency | function                                       | On    | seriesEndDate | series_end_date_on | every | regions    | districts  |"
    },
    {
      "line": 115,
      "value": "#    | CT.50646 | Recurring Visits Frequency - | Daily     | Daily - Everyday - Series End Date (Past Date) | Every... | On            | 30 May 2019        |     1 | Accra East | Accra East |"
    },
    {
      "line": 116,
      "value": "#@50711 @50713 @Regressao45701"
    },
    {
      "line": 117,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 118,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 119,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 120,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 121,
      "value": "#    And On the \"On\" field select \"\u003cOn\u003e\""
    },
    {
      "line": 122,
      "value": "#    And On the Every Month field select a number \"\u003cevery\u003e\""
    },
    {
      "line": 123,
      "value": "#    And On the Available field select a weekday and click on the arrow to include on the Chosen field \"\u003cday\u003e\""
    },
    {
      "line": 124,
      "value": "#    And On the On field select \"\u003cseries_end_date_on\u003e\""
    },
    {
      "line": 125,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 126,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 127,
      "value": "#"
    },
    {
      "line": 128,
      "value": "#    Examples:"
    },
    {
      "line": 129,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | function                               | On       | day | every | regions    | districts  |"
    },
    {
      "line": 130,
      "value": "#      | CT.50711 | Recurring Visits Frequency - | Weekly    | Daily - Everyday - Weekly - Every Week | Every... |   Su |     1 | Accra East | Accra East |"
    },
    {
      "line": 131,
      "value": "#      | CT.50713 | Recurring Visits Frequency - | Weekly    | Daily - Everyday - Weekly - Every Week- Series End Date | Every... |   Su |     1 | Accra East | Accra East |"
    },
    {
      "line": 132,
      "value": "#@50714 @Regressao45701"
    },
    {
      "line": 133,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 134,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 135,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 136,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 137,
      "value": "#    And On the \"On\" field select \"\u003ceveryMonth\u003e\""
    },
    {
      "line": 138,
      "value": "#    And On the \"\u003con\u003e\" field select"
    },
    {
      "line": 139,
      "value": "#    And On the Every Month field select a number \"\u003ceveryMonth2\u003e\""
    },
    {
      "line": 140,
      "value": "#    And On the Every field select a day on calendar \"\u003cdate\u003e\""
    },
    {
      "line": 141,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 142,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 143,
      "value": "#"
    },
    {
      "line": 144,
      "value": "#    Examples:"
    },
    {
      "line": 145,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | everyMonth  | everyMonth2 | function                                               | on       | regions    | districts  |"
    },
    {
      "line": 146,
      "value": "#      | CT.50714 | Recurring Visits Frequency - | Monthly   | Every Month |           1 | Monthly - Every Month - Specific Day - Series End Date | --None-- | Accra East | Accra East |"
    },
    {
      "line": 147,
      "value": "# @50723 @50732 @Regressao45701"
    },
    {
      "line": 148,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 149,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 150,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 151,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 152,
      "value": "#    And On the On field select Every Month \"\u003ceveryMonth\u003e\""
    },
    {
      "line": 153,
      "value": "#    And On the On field select Specific Day \"\u003cspecificDay\u003e\""
    },
    {
      "line": 154,
      "value": "#    And on the Every field select the number \"\u003cfrequency2\u003e\", \"\u003cevery\u003e\""
    },
    {
      "line": 155,
      "value": "#    And On the Every field select a day on calendar \"\u003cdate\u003e\""
    },
    {
      "line": 156,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 157,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 158,
      "value": "#"
    },
    {
      "line": 159,
      "value": "#    Examples:"
    },
    {
      "line": 160,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | everyMonth | everyMonth2 | function                                     | specificDay  | every | regions    | districts  |"
    },
    {
      "line": 161,
      "value": "#      | CT.50723 | Recurring Visits Frequency - | Monthly   | Every Month         | Every Month | - Monthly - Every Month - Every...           | Specific Day |     2 | Accra East | Accra East |"
    },
    {
      "line": 162,
      "value": "#      | CT.50732 | Recurring Visits Frequency - | Monthly   | Every Other Month         | Every Month | - Monthly - Every Other Month - Specific Day | Specific Day |     2 | Accra East | Accra East |"
    },
    {
      "line": 163,
      "value": "#@50725 @50730 @ 50735 @50734 @Regressao45701"
    },
    {
      "line": 164,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 165,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 166,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 167,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 168,
      "value": "#    And On the On field select Every Month \"\u003conRigth\u003e\""
    },
    {
      "line": 169,
      "value": "#    And On the On field select Specific Day \"\u003cspecificDay\u003e\""
    },
    {
      "line": 170,
      "value": "#    And On the \"\u003con2\u003e\" field select the option First"
    },
    {
      "line": 171,
      "value": "#    And On the \"\u003cweekDay\u003e\" field select the option Monday"
    },
    {
      "line": 172,
      "value": "#    And On the Every field select a day on calendar \"\u003cdate\u003e\""
    },
    {
      "line": 173,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 174,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 175,
      "value": "#"
    },
    {
      "line": 176,
      "value": "#    Examples:"
    },
    {
      "line": 177,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | onRigth     | everyMonth2 | function                                             | specificDay | every       | on2   | weekDay | regions    | districts  |"
    },
    {
      "line": 178,
      "value": "#      | CT.50725 | Recurring Visits Frequency - | Monthly | Every Month       | 1 | - Monthly - Every Month - Every... - Series End Date                 | Every... | Every Month | First | Monday | Accra East | Accra East |"
    },
    {
      "line": 179,
      "value": "#      | CT.50730 | Recurring Visits Frequency - | Monthly | Every Month       | 1 | - Monthly - Every Month - Every... - Series End Date                 | Every... | Every Month | First | Monday | Accra East | Accra East |"
    },
    {
      "line": 180,
      "value": "#      | CT.50735 | Recurring Visits Frequency - | Monthly | Every Other Month | 1 | - Monthly - Monthly - Every Other Month - Every... - Series End Date | Every... | Every Month | First | Monday | Accra East | Accra East |"
    },
    {
      "line": 181,
      "value": "#    | CT.50734 | Recurring Visits Frequency - | Monthly | Every Other Month | 1 | - Monthly - Every Other Month - Every... | Every... | Every Month | First | Monday | Accra East | Accra East |"
    },
    {
      "line": 182,
      "value": "#@50733 @@50731 Regressao45701"
    },
    {
      "line": 183,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 184,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 185,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 186,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 187,
      "value": "#    And On the On field select Every Month \"\u003conRigth\u003e\""
    },
    {
      "line": 188,
      "value": "#    And On the On field select Specific Day \"\u003cspecificDay\u003e\""
    },
    {
      "line": 189,
      "value": "#    And On the Every Month field select a number \"\u003ceveryMonth2\u003e\""
    },
    {
      "line": 190,
      "value": "#    And On the \"\u003cevery\u003e\" field select a day on calendar"
    },
    {
      "line": 191,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 192,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 193,
      "value": "#"
    },
    {
      "line": 194,
      "value": "#    Examples:"
    },
    {
      "line": 195,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | onRigth           | everyMonth2 | function                                                       | specificDay  | e |  regions    | districts  |"
    },
    {
      "line": 196,
      "value": "#      | CT.50733 | Recurring Visits Frequency - | Monthly   | Other Month |           2 | - Monthly - Every Other Month | Specific Day | 2 | Accra East | Accra East |"
    },
    {
      "line": 197,
      "value": "#      | CT.50731 | Recurring Visits Frequency - | Monthly   | Every Month |           2 | - Monthly - Every Other Month - Specific Day - Series End Date | Specific Day | 2 | Accra East | Accra East |"
    },
    {
      "line": 198,
      "value": "# @50736 @50737 @Regressao @Regressao45701"
    },
    {
      "line": 199,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 200,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 201,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 202,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 203,
      "value": "#    And On the On field select Every Month \"\u003ceveryMonth\u003e\""
    },
    {
      "line": 204,
      "value": "#     And On the On field select Month \"\u003cmonth\u003e\""
    },
    {
      "line": 205,
      "value": "#     And On the On field select frequencyDay \"\u003cday\u003e\""
    },
    {
      "line": 206,
      "value": "#     And On the \"\u003cevery\u003e\" field select a day on calendar"
    },
    {
      "line": 207,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 208,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 209,
      "value": "#"
    },
    {
      "line": 210,
      "value": "#    Examples:"
    },
    {
      "line": 211,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | everyMonth | function            | regions    | districts  |month|day|"
    },
    {
      "line": 212,
      "value": "#      | CT.50736 | Recurring Visits Frequency - | Yearly    | Every...      | - Yearly - Every... | Accra East | Accra East |July|8|"
    },
    {
      "line": 213,
      "value": "#\t\t\t| CT.50737 | Recurring Visits Frequency - | Yearly    | Every...      | - Yearly - Every... - Series End Date | Accra East | Accra East |July|8|"
    },
    {
      "line": 214,
      "value": "# @50738 @50739 @49793 @Regressao @Regressao45701"
    },
    {
      "line": 215,
      "value": "#  Scenario Template: [Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\""
    },
    {
      "line": 216,
      "value": "#    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\""
    },
    {
      "line": 217,
      "value": "#    And Click in the checkbox to the create Recurring Series of Visits option"
    },
    {
      "line": 218,
      "value": "#    And Select the \"\u003cfrequency\u003e\""
    },
    {
      "line": 219,
      "value": "#    And On the On field select Every Month \"\u003conRigth\u003e\""
    },
    {
      "line": 220,
      "value": "#    And On the \"\u003con2\u003e\" field select the option First"
    },
    {
      "line": 221,
      "value": "#    And On the \"\u003cweekDay\u003e\" field select the option Monday"
    },
    {
      "line": 222,
      "value": "#    And On the On field select Month \"\u003cmonth\u003e\""
    },
    {
      "line": 223,
      "value": "#    And On the \"\u003cevery\u003e\" field select a day on calendar"
    },
    {
      "line": 224,
      "value": "#    When Click on Create Visits"
    },
    {
      "line": 225,
      "value": "#    Then Go to the Calendar View and check if the visits planes are being shown according"
    },
    {
      "line": 226,
      "value": "#"
    },
    {
      "line": 227,
      "value": "#    Examples:"
    },
    {
      "line": 228,
      "value": "#      | Scenario | DescricaoDoCenario           | frequency | onRigth | function                            | regions    | districts  | on2   | weekDay | month |"
    },
    {
      "line": 229,
      "value": "#      | CT.50738 | Recurring Visits Frequency - | Yearly    | on the  | - Yearly - On the                   | Accra East | Accra East | First | Day     | July  |"
    },
    {
      "line": 230,
      "value": "#      | CT.50739 | Recurring Visits Frequency - | Yearly    | on the  | - Yearly - On the - Series End Date | Accra East | Accra East | First | Day     | July  |"
    },
    {
      "line": 231,
      "value": "#      | CT.49793 | Recurring Visits Frequency - | Yearly    | on the  | - Yearly - On the - Series End Date | Accra East | Accra East | First | Day     | July  |"
    }
  ],
  "line": 233,
  "name": "[Recurring Visits frequency - \"\u003cfunction\u003e\"] \"\u003cScenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\"",
  "description": "",
  "id": "recurring-visits-frequency;[recurring-visits-frequency---\"\u003cfunction\u003e\"]-\"\u003cscenario\u003e\"-\"\u003cdescricaodocenario\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Template",
  "tags": [
    {
      "line": 232,
      "name": "@51161"
    },
    {
      "line": 232,
      "name": "@Regressao"
    },
    {
      "line": 232,
      "name": "@Regressao45701"
    }
  ]
});
formatter.step({
  "line": 234,
  "name": "The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"\u003cregions\u003e\",\"\u003cdistricts\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "Click in the checkbox to the create Recurring Series of Visits option",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "Select the \"\u003cfrequency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "On the \"On\" field select \"\u003cOn\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "Click on Create Visits",
  "keyword": "When "
});
formatter.step({
  "line": 239,
  "name": "Go to the Calendar View and check if the visits planes are being shown according Empty",
  "keyword": "Then "
});
formatter.examples({
  "line": 241,
  "name": "",
  "description": "",
  "id": "recurring-visits-frequency;[recurring-visits-frequency---\"\u003cfunction\u003e\"]-\"\u003cscenario\u003e\"-\"\u003cdescricaodocenario\u003e\";",
  "rows": [
    {
      "cells": [
        "Scenario",
        "DescricaoDoCenario",
        "frequency",
        "On",
        "function",
        "regions",
        "districts"
      ],
      "line": 242,
      "id": "recurring-visits-frequency;[recurring-visits-frequency---\"\u003cfunction\u003e\"]-\"\u003cscenario\u003e\"-\"\u003cdescricaodocenario\u003e\";;1"
    },
    {
      "cells": [
        "CT.51161",
        "Recurring Visits Frequency -",
        "Daily",
        "Every WeekDay",
        "Daily - EveryWeekday - Series End Date (Empty)",
        "Accra East",
        "Accra East"
      ],
      "line": 243,
      "id": "recurring-visits-frequency;[recurring-visits-frequency---\"\u003cfunction\u003e\"]-\"\u003cscenario\u003e\"-\"\u003cdescricaodocenario\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 11,
  "name": "that I\u0027m logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.that_I_m_logged_in()"
});
formatter.result({
  "duration": 31069268700,
  "status": "passed"
});
formatter.scenario({
  "line": 243,
  "name": "[Recurring Visits frequency - \"Daily - EveryWeekday - Series End Date (Empty)\"] \"CT.51161\"-\"Recurring Visits Frequency -\"",
  "description": "",
  "id": "recurring-visits-frequency;[recurring-visits-frequency---\"\u003cfunction\u003e\"]-\"\u003cscenario\u003e\"-\"\u003cdescricaodocenario\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Template",
  "tags": [
    {
      "line": 232,
      "name": "@Regressao45701"
    },
    {
      "line": 232,
      "name": "@51161"
    },
    {
      "line": 232,
      "name": "@Regressao"
    }
  ]
});
formatter.step({
  "line": 234,
  "name": "The fields are filled with the information of Phone Call StartedTime EndDate and EndTime \"Accra East\",\"Accra East\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "Click in the checkbox to the create Recurring Series of Visits option",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "Select the \"Daily\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "On the \"On\" field select \"Every WeekDay\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "Click on Create Visits",
  "keyword": "When "
});
formatter.step({
  "line": 239,
  "name": "Go to the Calendar View and check if the visits planes are being shown according Empty",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Accra East",
      "offset": 90
    },
    {
      "val": "Accra East",
      "offset": 103
    }
  ],
  "location": "VisitPlanner_OTE_45700steps.the_fields_are_filled_with_the_information_of_Phone_Call_StartedTime_EndDate_and_EndTime(String,String)"
});
formatter.result({
  "duration": 39860102200,
  "status": "passed"
});
formatter.match({
  "location": "VisitPlanner_OTE_45701steps.click_in_the_checkbox_to_the_create_Recurring_Series_of_Visits_option()"
});
formatter.result({
  "duration": 720942600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Daily",
      "offset": 12
    }
  ],
  "location": "VisitPlanner_OTE_45701steps.select_the(String)"
});
formatter.result({
  "duration": 24106604200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "On",
      "offset": 8
    },
    {
      "val": "Every WeekDay",
      "offset": 26
    }
  ],
  "location": "VisitPlanner_OTE_45701steps.on_the_field_select(String,String)"
});
formatter.result({
  "duration": 45245839400,
  "status": "passed"
});
formatter.match({
  "location": "VisitPlanner_OTE_45701steps.click_on_Create_Visits()"
});
formatter.result({
  "duration": 10085139000,
  "status": "passed"
});
formatter.match({
  "location": "VisitPlanner_OTE_45701steps.go_to_the_Calendar_View_and_check_if_the_visits_planes_are_being_shown_according_Empty()"
});
formatter.result({
  "duration": 6047312900,
  "status": "passed"
});
});