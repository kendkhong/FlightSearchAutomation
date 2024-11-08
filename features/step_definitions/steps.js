const {expect} = require('@playwright/test');
const {Given, When, Then} = require('@cucumber/cucumber');


Given('I know the trip details such as airport, number of passenger, and depart date', {timeout: 10*1000}, async function () {

    this.homePage = this.poManager.getHomePage();
    await this.homePage.goTo();
    await this.homePage.clearCookieAlert();
  });

When('I fill out the flight search form with {string}, {string}, {string}, and {string}', async function (originAirport,
    destinationAirport, numberPassenger, departDate
) {      

    await this.homePage.filloutSearchForm(originAirport,destinationAirport,numberPassenger,departDate);
});

When('I click on the search button', async function () {

    await this.homePage.submitFlightSearch();
});

When('I click on a fare class of Main', {timeout: 90*1000}, async function () {

    await this.homePage.chooseFareClass();
});

When('I click on a fare type of Main',  async function () {

    await this.homePage.chooseFareType();
});

When('I click on Stay in Main button', {timeout: 10*1000}, async function () {

    await this.homePage.noUpgradeFare();
});

Then('Verify trip summary {string} and {string}', async function (citypair, flightdate) {

    this.tripSummaryPage = this.poManager.getTripSummaryPage();
    const actualCityPair = await this.tripSummaryPage.cityPairSummary();
    const actualFlightDate = await this.tripSummaryPage.flightDateSummary();

    expect(citypair.includes(actualCityPair.trim())).toBeTruthy();
    expect(flightdate.includes(actualFlightDate)).toBeTruthy();
});