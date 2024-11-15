# The Flight Search Test Automation Project

This is a Web Client UI automated test project using NodeJs Playwright framework includes testing framework such as mocha and cucumber. This project also introduced the concept of Behavior Driven Development (BDD) and Page Object Model (POM). My creating a readable and maintainable code approach has helped me to pick these technologies mentioned above for this project. 

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)

# Introduction
The goal of the project is basically automated the process of searching and selecting a one-way flight on the American Airline website. The project used the latest as well as existing technologies to demonstrate an efficient and effective way to write a clean test code that can be reused. This project provided two independent approaches of designing and executing automated tests. The first approach uses the Page Object Model concept to encapsulate all the details of HTML elements into a class object, then a Mocha test file can interact with these class object files. 

The second aproach uses Behavior Driven Development to write test scenarios in a natural language using Gherkin language syntax. Cucumber framework generated steps definition where the code executed behind the scene, which bridges the communication between Gherkin test scenarios and actual test code implementation for test features described in the feature file. Then, the code in the steps definition file interacts with the class object files. 

## Installation

### Prerequisites

    - Node.js (v20 or higher)
    - Mocha installed 
    - Playwright installed
    - Web browser installed
    - Cucumber installed
    - Other necessary tools or dependencies

### Steps to install
    
1. Clone the repository
    ```bash
    git clone https://github.com/kendkhong/FlightSearchAutomation.git
    ```
2. Navigate into the project folder:
    ```bash
    cd FlightSearchAutomation
    ```
3. Install dependencies
    ```bash
    npm install
    npm install @playwright/test --save-dev
    npx playwright install
    npm install @cucumber/cucumber
    ```

## Usage

### Running the Project

#### Mocha Project with Page Object Model
1. To run tests:
    ```bash
    npx playwright test tests/FlightSearch.spec.js --headed
    ```


#### Cucumber project with Page Object Model

1. To run tests:
    ```bash
    npx cucumber-js --exit
    ```

