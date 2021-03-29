Feature: Pets

    Background:
        Given I using the api version 2

    Scenario: Get all available pets
        Given I set the path "/pet/findByStatus"
        And add a query parameter "findByStatus" with value "available"
        When I send GET HTTP request
        Then I receive valid HTTP response code 200
        And the response body is in JSON format

    Scenario: Add a new pet
        Given I set the path "/pet"
        When I send POST HTTP request
            | name   | fish      |
            | status | available |
        Then I receive valid HTTP response code 200

    Scenario: Update an existing pet
        Given I set the path "/pet"
        When I send PUT HTTP request
            | id     |           |
            | status | available |
        Then I receive valid HTTP response code 200

    Scenario: Remove an existing pet
        Given I set the path "/pet"
        When I send DELETE HTTP request
            | id |  |
        Then I receive valid HTTP response code 200