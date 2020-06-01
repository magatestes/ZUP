#language: en
#/**
# * Autor: Fernando Lisboa
# * Empresa: Taking
# * Data: 27/06/2019
# * Caminho: Portal Sales Force
# */
Feature: Recurring Visits frequency

  Background: 
    Given that I'm logged in

  @47764 @49794 @Regressao45701
   Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
     And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
     And Click in the checkbox to the create Recurring Series of Visits option
     And Select the "<frequency>"
     And On the On field select onRigth"<onRigth>"
     And On the On field select Specific Day "<specificDay>"
     And On the Every Month field select a number "<every>"
     And On the On field select "<series_end_date_on>"
     When Click on Create Visits
     Then Go to the Calendar View and check if the visits planes are being shown according
  
     Examples:
       | Scenario | DescricaoDoCenario           | frequency | function | regions    | districts  | onRigth     | specificDay | every |
       | CT.47764 | Recurring Visits Frequency - | Monthly   | Monthly  | Accra East | Accra East | Every Month | Specific Day |     1 |
    @49855 @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the On field select onRigth"<onRigth>"
      And On the On field select Specific Day "<specificDay>"
     And On the Every field select a day on calendar "<date>"
      And On the Every Month field select a number "<every>"
      And On the Series End Date field select "<enable>"
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario | frequency | series_end_date_on | date       | every | enable | function                                               | specificDay  | regions    | districts  | onRigth     |
        | CT.49855 | Recurring Visits Frequency -  | Monthly   | on                 | 01/01/2019 |     2 | On     | Monthly - Every Month - Specific Day - Series End Date | Specific Day | Accra East | Accra East | Every Month |
   @49856 @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the On field select onRigth"<onRigth>"
      And On the Every Month field select a number "<every>"
      And On the Available field select a weekday and click on the arrow to include on the Chosen field "<day>"
      And On the Every field select a day on calendar "<date>"
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario           | frequency | day | function | regions    | districts  | onRigth  | every |
        | CT.49856 | Recurring Visits Frequency - | Weekly    | Su  | Weekly   | Accra East | Accra East | Every... |     1 |
  
   @50642 @49794 @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>" on the On field select "<On>" and on the Every field select the number "<frequency>", "<every>"
      And On the Every field select a day on calendar "<date>"
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario           | frequency | function         | On    | every | regions    | districts  |
        | CT.50642 | Recurring Visits Frequency - | Daily     | Daily - Everyday | Every |     1 | Accra East | Accra East |
         | CT.49794 | Recurring Visits Frequency - | Daily     | Daily            | Every...|     | Accra East | Accra East |
   @50643 @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the "On" field select "<On>"
       And On the Every field select a day on calendar "<date>"
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario           | frequency | function         | On            | regions    | districts  |
        | CT.50643 | Recurring Visits Frequency - | Daily     | Daily - Everyday | Every WeekDay | Accra East | Accra East |
  
  @50645 @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the "On" field select "<On>"
      And on the Every field select the number "<frequency>", "<every>"
      And On the Every field select a day on calendar "<date>"
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario           | frequency | function         | On    | regions    | districts  | every |
        | CT.50645 | Recurring Visits Frequency - | Daily     | Daily - Everyday | Every... | Accra East | Accra East |     1 |
  @50646 @Regressao45701
  Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
    And Click in the checkbox to the create Recurring Series of Visits option
    And Select the "<frequency>"
    And On the "On" field select "<On>"
    And on the Every field select the number "<frequency>", "<every>"
    And On the Series End Date field select "<seriesEndDate>"
    And On the On field select "<series_end_date_on>"
    When Click on Create Visits
    Then Go to the Calendar View and check if the visits planes are being shown according
  
    Examples:
      | Scenario | DescricaoDoCenario           | frequency | function                                       | On    | seriesEndDate | series_end_date_on | every | regions    | districts  |
      | CT.50646 | Recurring Visits Frequency - | Daily     | Daily - Everyday - Series End Date (Past Date) | Every... | On            | 30 May 2019        |     1 | Accra East | Accra East |
  @50711 @50713 @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the "On" field select "<On>"
      And On the Every Month field select a number "<every>"
      And On the Available field select a weekday and click on the arrow to include on the Chosen field "<day>"
      And On the On field select "<series_end_date_on>"
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario           | frequency | function                               | On       | day | every | regions    | districts  |
        | CT.50711 | Recurring Visits Frequency - | Weekly    | Daily - Everyday - Weekly - Every Week | Every... |   Su |     1 | Accra East | Accra East |
        | CT.50713 | Recurring Visits Frequency - | Weekly    | Daily - Everyday - Weekly - Every Week- Series End Date | Every... |   Su |     1 | Accra East | Accra East |
  @50714 @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the "On" field select "<everyMonth>"
      And On the "<on>" field select
      And On the Every Month field select a number "<everyMonth2>"
      And On the Every field select a day on calendar "<date>"
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario           | frequency | everyMonth  | everyMonth2 | function                                               | on       | regions    | districts  |
        | CT.50714 | Recurring Visits Frequency - | Monthly   | Every Month |           1 | Monthly - Every Month - Specific Day - Series End Date | --None-- | Accra East | Accra East |
   @50723 @50732 @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the On field select Every Month "<everyMonth>"
      And On the On field select Specific Day "<specificDay>"
      And on the Every field select the number "<frequency2>", "<every>"
      And On the Every field select a day on calendar "<date>"
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario           | frequency | everyMonth | everyMonth2 | function                                     | specificDay  | every | regions    | districts  |
        | CT.50723 | Recurring Visits Frequency - | Monthly   | Every Month         | Every Month | - Monthly - Every Month - Every...           | Specific Day |     2 | Accra East | Accra East |
        | CT.50732 | Recurring Visits Frequency - | Monthly   | Every Other Month         | Every Month | - Monthly - Every Other Month - Specific Day | Specific Day |     2 | Accra East | Accra East |
  @50725 @50730 @50735 @50734 @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the On field select Every Month "<onRigth>"
      And On the On field select Specific Day "<specificDay>"
      And On the "<on2>" field select the option First
      And On the "<weekDay>" field select the option Monday
      And On the Every field select a day on calendar "<date>"
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
     Examples:
       | Scenario | DescricaoDoCenario           | frequency | onRigth     | everyMonth2 | function                                             | specificDay | every       | on2   | weekDay | regions    | districts  |
       | CT.50725 | Recurring Visits Frequency - | Monthly | Every Month       | 1 | - Monthly - Every Month - Every... - Series End Date                 | Every... | Every Month | First | Monday | Accra East | Accra East |
       | CT.50730 | Recurring Visits Frequency - | Monthly | Every Month       | 1 | - Monthly - Every Month - Every... - Series End Date                 | Every... | Every Month | First | Monday | Accra East | Accra East |
       | CT.50735 | Recurring Visits Frequency - | Monthly | Every Other Month | 1 | - Monthly - Monthly - Every Other Month - Every... - Series End Date | Every... | Every Month | First | Monday | Accra East | Accra East |
     | CT.50734 | Recurring Visits Frequency - | Monthly | Every Other Month | 1 | - Monthly - Every Other Month - Every... | Every... | Every Month | First | Monday | Accra East | Accra East |
  @50733 @50731 @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the On field select Every Month "<onRigth>"
      And On the On field select Specific Day "<specificDay>"
      And On the Every Month field select a number "<everyMonth2>"
      And On the "<every>" field select a day on calendar
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario           | frequency | onRigth           | everyMonth2 | function                                                       | specificDay  | e |  regions    | districts  |
        | CT.50733 | Recurring Visits Frequency - | Monthly   | Other Month |           2 | - Monthly - Every Other Month | Specific Day | 2 | Accra East | Accra East |
        | CT.50731 | Recurring Visits Frequency - | Monthly   | Every Month |           2 | - Monthly - Every Other Month - Specific Day - Series End Date | Specific Day | 2 | Accra East | Accra East |
   @50736 @50737 @Regressao @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the On field select Every Month "<everyMonth>"
       And On the On field select Month "<month>"
       And On the On field select frequencyDay "<day>"
       And On the "<every>" field select a day on calendar
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario           | frequency | everyMonth | function            | regions    | districts  |month|day|
        | CT.50736 | Recurring Visits Frequency - | Yearly    | Every...      | - Yearly - Every... | Accra East | Accra East |July|8|
  			| CT.50737 | Recurring Visits Frequency - | Yearly    | Every...      | - Yearly - Every... - Series End Date | Accra East | Accra East |July|8|
   
   @50738 @50739 @49793 @Regressao @Regressao45701
    Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
      And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
      And Click in the checkbox to the create Recurring Series of Visits option
      And Select the "<frequency>"
      And On the On field select Every Month "<onRigth>"
      And On the "<on2>" field select the option First
      And On the "<weekDay>" field select the option Monday
      And On the On field select Month "<month>"
      And On the "<every>" field select a day on calendar
      When Click on Create Visits
      Then Go to the Calendar View and check if the visits planes are being shown according
  
      Examples:
        | Scenario | DescricaoDoCenario           | frequency | onRigth | function                            | regions    | districts  | on2   | weekDay | month |
        | CT.50738 | Recurring Visits Frequency - | Yearly    | on the  | - Yearly - On the                   | Accra East | Accra East | First | Day     | July  |
        | CT.50739 | Recurring Visits Frequency - | Yearly    | on the  | - Yearly - On the - Series End Date | Accra East | Accra East | First | Day     | July  |
        | CT.49793 | Recurring Visits Frequency - | Yearly    | on the  | - Yearly - On the - Series End Date | Accra East | Accra East | First | Day     | July  |
  
   @50758 @Regressao  @Regressao45701
  Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
   And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
   And Click in the checkbox to the create Recurring Series of Visits option
    And Select the "<frequency>" on the On field select "<On>" and on the Every field select the number "<frequency>", "<every>"
    When Click on Create Visits
   Then Go to the Calendar View and check if the visits planes are being shown according Empty

  Examples: 
     | Scenario | DescricaoDoCenario           | frequency | On       | function                                   | every | regions    | districts  |
    | CT.50758 | Recurring Visits Frequency - | Daily     | Every... | Daily - Everyday - Series End Date (Empty) |     1 | Accra East | Accra East |
  
  @51161 @Regressao @Regressao45701
  Scenario Template: [Recurring Visits frequency - "<function>"] "<Scenario>"-"<DescricaoDoCenario>"
    And The fields are filled with the information of Phone Call StartedTime EndDate and EndTime "<regions>","<districts>"
    And Click in the checkbox to the create Recurring Series of Visits option
    And Select the "<frequency>"
    And On the "On" field select "<On>"
    When Click on Create Visits
    Then Go to the Calendar View and check if the visits planes are being shown according Empty

    Examples: 
      | Scenario | DescricaoDoCenario           | frequency | On            | function                                       | regions    | districts  |
      | CT.51161 | Recurring Visits Frequency - | Daily     | Every WeekDay | Daily - EveryWeekday - Series End Date (Empty) | Accra East | Accra East |
