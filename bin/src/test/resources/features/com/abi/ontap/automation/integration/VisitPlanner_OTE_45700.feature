#language: en
#/**
# * Autor: Henrique Magalhaes
# * Empresa: Taking
# * Data: 27/06/2019
# * Caminho: Portal Sales Force
# */
Feature: Sales Foce Validations

  @47752 @48900 @47754 @Regressao
  Scenario Template: [Validate Visit Plans Tab] "<Scenario>"-"<DescricaoDoCenario>"
    Given that I log in to Sales Force with credentials "<user>" and "<password>"
    And the visit plans tab is selected
    And the new button is pressed
    When some countries are selected "<regions>"
    And some regions are selected "<districts>"
    And some accounts are selected from the list
    And the sequence and duration are populated
    And the fields asking for date and time are populated
    Then the button Create Visits is pressed showing the success message

    Examples: 
      | Scenario | DescricaoDoCenario                                            | url                         | user                                | password | profile | regions    | districts  |
      | CT47752  | New Visit Plan Creation                                       | https://test.salesforce.com | denise.medeiros@ab-inbev.com.afrcan | Ambev123 | TZ BDR  | Accra East | Accra East |
      | CT48900  | Manager options according with the user level - Administrator | https://test.salesforce.com | denise.medeiros@ab-inbev.com.afrcan | Ambev123 | TZ BDR  | Accra East | Accra East |
      | CT47754  | Create Visits for another Country with Admin Account          | https://test.salesforce.com | denise.medeiros@ab-inbev.com.afrcan | Ambev123 | TZ BDR  | Accra East | Accra East |

  @47753 @Regressao
  Scenario Template: [Validate Visit Plans Tab] "<Scenario>"-"<DescricaoDoCenario>"
    Given that I log in to Sales Force with credentials "<user>" and "<password>"
    And the visit plans tab is selected
    When I click on any visit with the status Open
    Then the country combo box is not editable

    Examples: 
      | Scenario | DescricaoDoCenario                                           | url                         | user                                | password | profile |
      | CT47753  | Create Visits for another Country where I do not have access | https://test.salesforce.com | denise.medeiros@ab-inbev.com.afrcan | Ambev123 | TZ BDR  |

  @48896 @Regressao
  Scenario Template: [Validate Visit Plans Tab] "<Scenario>"-"<DescricaoDoCenario>"
    Given that I log in to Sales Force with credentials "<user>" and "<password>"
    And the visit plans tab is selected
    And the new button is pressed
    When some countries are selected "<regions>"
    And some regions are selected "<districts>"
    And some accounts are selected from the list
    And the sequence and duration are populated
    And no event type is populated
    Then the button Create Visits is pressed showing a error message

    Examples: 
      | Scenario | DescricaoDoCenario      | url                         | user                                | password | profile | regions    | districts  |
      | CT48896  | Any Event Type Selected | https://test.salesforce.com | denise.medeiros@ab-inbev.com.afrcan | Ambev123 | TZ BDR  | Accra East | Accra East |

  @48897 @Regressao
  Scenario Template: [Validate Visit Plans Tab] "<Scenario>"-"<DescricaoDoCenario>"
    Given that I log in to Sales Force with credentials "<user>" and "<password>"
    And the visit plans tab is selected
    And the new button is pressed
    When some countries are selected "<regions>"
    And some regions are selected "<districts>"
    And the fields asking for date and time are populated
    Then the button Create Visits is pressed showing a POC error message

    Examples: 
      | Scenario | DescricaoDoCenario | url                         | user                                | password | profile | regions    | districts  |
      | CT48897  | Any POC Selected   | https://test.salesforce.com | denise.medeiros@ab-inbev.com.afrcan | Ambev123 | TZ BDR  | Accra East | Accra East |

  @48898 @Regressao
  Scenario Template: [Validate Visit Plans Tab] "<Scenario>"-"<DescricaoDoCenario>"
    Given that I log in to Sales Force with credentials "<user>" and "<password>"
    And the visit plans tab is selected
    And the new button is pressed
    When some countries are selected "<regions>"
    And some regions are selected "<districts>"
    And some accounts are selected from the list
    And the sequence and duration are populated
    And the fields asking for date and time are populated
    And the Assing to  user field is set empty
    Then the button Create Visits is pressed showing the user error message

    Examples: 
      | Scenario | DescricaoDoCenario | url                         | user                                | password  | profile | regions    | districts  |
      | CT48898  | Any POC Selected   | https://test.salesforce.com | denise.medeiros@ab-inbev.com.afrcan | Ambev1230 | TZ BDR  | Accra East | Accra East |

  @48899 @Regressao
  Scenario Template: [Validate Visit Plans Tab] "<Scenario>"-"<DescricaoDoCenario>"
    Given that I log in to Sales Force with credentials "<user>" and "<password>"
    And the visit plans tab is selected
    And the new button is pressed
    When the fields asking for date and time are populated
    Then the button Create Visits is pressed showing a POC error message

    Examples: 
      | Scenario | DescricaoDoCenario | url                         | user                                | password | profile |
      | CT48899  | Any POC Selected   | https://test.salesforce.com | denise.medeiros@ab-inbev.com.afrcan | Ambev123 | TZ BDR  |
