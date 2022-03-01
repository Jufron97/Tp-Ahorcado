Feature: Go to the home and display a welcome message

  Scenario: Dont write a name on the home page and get the default welcome message.
    Given I am on the home page
    When I do nothing
    Then I should see the welcome message

  Scenario: Write your name in the home page and get a custom welcome message.
    Given I am on the home page
    When I write "Jose" in the name box
    Then I should see the welcome "Jose"