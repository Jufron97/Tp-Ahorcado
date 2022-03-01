Feature: Pick a name and difficulty, play the game and win

    Scenario: Lose the game in easy difficulty
        Given I am on the home page
        When I write "Juan" in the name box
        And I press the select name button
        And I select the easy difficulty
        And I select letter "t"
        And I select letter "e"
        And I select letter "s"
        Then I should see the victory message