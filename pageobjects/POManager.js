const { HomePage } = require('../pageobjects/HomePage');
const { TripSummaryPage } = require('../pageobjects/TripSummaryPage');

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.tripSummaryPage = new TripSummaryPage(this.page);

    }

    getHomePage()
    {
        return this.homePage;
    }

    getTripSummaryPage()
    {
        return this.tripSummaryPage;
    }
}

module.exports = {POManager};