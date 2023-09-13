Feature: Feature name

    Feature : Login to Turnup portal

  Scenario: Successful login
    Given the user is navigate to Turnup portal
    When the user input username 
    And  the user input password 
    And the user clicks the login button
    Then they should be redirected to the dashboard

 
