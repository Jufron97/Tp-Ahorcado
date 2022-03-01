Feature: Pick a name and difficulty, play the game and lose

    Scenario: Lose the game in easy difficulty
        Given I am on the home page
        When I write "Juan" in the name box
        And I press the select name button
        And I select the easy difficulty
        And I select letter "x"
        And I select letter "y"
        And I select letter "r"
        And I select letter "c"
        And I select letter "p"
        And I select letter "o"
        And I select letter "a"
        Then I should see the defeat message