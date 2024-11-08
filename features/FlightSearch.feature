Feature: Flight Search Validation

Scenario Outline: Search One Way Flight
    Given I know the trip details such as airport, number of passenger, and depart date
    When I fill out the flight search form with "SLC", "SEA", "2", and "1/10/2025"
        And I click on the search button
    When I click on a fare class of Main
        And I click on a fare type of Main
        And I click on Stay in Main button
    Then Verify trip summary "<citypair>" and "<tripdate>"

    Examples:
    | citypair                           | tripdate                  |
    | Salt Lake City, UT to Seattle, WA  | Friday, January 10, 2025  |
