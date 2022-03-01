Feature: Pick a difficulty and play the game

    Scenario: Play the game with hard difficulty
        Given I am on the home page
        When I write "Juan" in the name box
        And I press the select name button
        And I select the hard difficulty
        Then I should be able to play the game



