Feature: Pick a name and I should see a scoreboard with my name

    Scenario: Roberto plays a game and want to see his score
        Given I am on the home page
        When I write "Roberto" in the name box
        And I press the select name button
        And I navigate throw the score page
        Then I should see a score for "Roberto"

