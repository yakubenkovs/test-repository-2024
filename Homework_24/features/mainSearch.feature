    Feature: Wdio main search

        Scenario: Create main flow search
            Given I navigate on https://webdriver.io/ page
            When I click on "Header > Search Field" button
            And I input text "setTimeout" to component "Search PopUp > Search Input"
            And I click on "Search PopUp > First Suggestion Line" button
            Then I expect that element "Api Description Page > Page Title" should equals text "setTimeout"     

