class TripSummaryPage
{
    constructor(page)
    {
        this.page = page;
        this.cityPair = page.locator('.flightcard-summary h2 .city-pair');
        this.flightDate = page.locator('.flightcard-summary h3.date');

    }

    async cityPairSummary()
    {
        return await this.cityPair.textContent();
    }

    async flightDateSummary()
    {
        return await this.flightDate.textContent();
    }
}

module.exports = {TripSummaryPage};