    Feature: Wdio menu navigation

        Scenario: Find and open the page through menu
            Given I navigate on https://webdriver.io/ page
            When I click on "Header > Api Menu Element" button
            And I click on "Left Navigation Panel > Browser Section" button
            And I click on "Left Navigation Panel > Action Page" button
            Then I expect that element "Api Description Page > Page Title" should equals text "action"