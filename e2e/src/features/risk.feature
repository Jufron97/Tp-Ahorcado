Feature: play the game and risk a word

  Scenario: play the game, risk a word and I lose
    Given I am on the home page
    When I write "Juan" in the name box
    And I press the select name button
    And I select the hard difficulty
    And I risk the word "papa"
    Then I should see the defeat message

  Scenario: play the game, risk a word and I lose
    Given I am on the home page
    When I write "Juan" in the name box
    And I press the select name button
    And I select the hard difficulty
    And I risk the word "test"
    Then I should see the victory message