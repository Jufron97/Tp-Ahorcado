Feature: ask for a hint

    Scenario: Ask for a hint in hard difficulty
        Given I am on the home page
        When I write "Juan" in the name box
        And I press the select name button
        And I select the hard difficulty
        And I ask for a hint
        Then A hint should appear