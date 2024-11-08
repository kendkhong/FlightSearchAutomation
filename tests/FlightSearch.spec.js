const {test, expect} = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/flightTestData.json')));


test('Search a one way flight', async ( {page} ) => {
    
    //Arrange
    const poManager = new POManager(page);
    const homePage = poManager.getHomePage();
    const expectedCityPair = dataset.oneWayTrip;
    const expectedFlightDate = dataset.tripDate;

    // Action
    await homePage.goTo();
    await homePage.clearCookieAlert();
    await homePage.filloutSearchForm(dataset.originAirport,dataset.destinationAirport,dataset.numberPassenger,dataset.departDate);
    await homePage.submitFlightSearch();
    // Review search result and select a desired fare
    await homePage.chooseFareClass();
    await homePage.chooseFareType();
    await homePage.noUpgradeFare();

    // Review trip summary
    const tripSummaryPage = poManager.getTripSummaryPage();
    const actualCityPair = await tripSummaryPage.cityPairSummary();
    const actualFlightDate = await tripSummaryPage.flightDateSummary();

    // Validation
    expect(expectedCityPair.includes(actualCityPair.trim())).toBeTruthy();
    expect(expectedFlightDate.includes(actualFlightDate)).toBeTruthy();

});