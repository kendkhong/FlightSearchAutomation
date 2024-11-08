
class HomePage
{
    constructor(page)
    {
        this.page = page;
        this.waitForCookieAlert = page.waitForSelector('button[id="button"]');
        this.dismissCookie = page.locator('button[id="button"]').first();
        this.oneWay = page.locator('span:has-text("One way")').last();
        this.roundTrip = page.locator('span:has-text("Round trip")');
        this.originAirport = page.locator('input[name="originAirport"]').first();
        this.destinationAirport = page.locator('input[name="destinationAirport"]').first();
        this.numberPassenger = page.locator('select[name="adultOrSeniorPassengerCount"]').first();
        this.departDate = page.locator("//div[@class='row-form aa-flightSearchForm-datesRow']//input[@id='aa-leavingOn']");
        this.returnDate = page.locator("");
        this.searchButton = page.locator('input[type="submit"]').first();
        this.waitForResults = page.waitForSelector("//button[@id='flight-1-product-group-MAIN']//div[@class='btn-contents']", {timeout: 60000});
        this.selectFareClass = page.locator("//button[@id='flight-1-product-group-MAIN']//div[@class='btn-contents']");
        this.selectFareType = page.locator('button[id="slice-1-MAIN-coach"]');
        this.waitForPopupWindow = page.waitForSelector('button[id="btn-no-upgrade"]', {timeout: 80000});
        //this.upgradeFare = page.locator('button[id="slice-1-MAIN-coach"]');
        this.upgradeFare = page.locator('button[id="btn-no-upgrade"]');

    }

    async goTo()
    {
        await this.page.goto('https://www.aa.com/homePage.do');
    }

    async clearCookieAlert()
    {
        await this.waitForCookieAlert;
        await this.dismissCookie.click();
    }

    async filloutSearchForm(originAirport,destinationAirport, numPassenger, departDate)
    {
        await this.oneWay.click();   
        await this.originAirport.clear();
        await this.originAirport.fill(originAirport);
        await this.destinationAirport.fill(destinationAirport);
        await this.numberPassenger.selectOption(numPassenger);
        await this.departDate.type(departDate);

    }

    async submitFlightSearch()
    {
        await this.searchButton.click();
    }

    async chooseFareClass()
    {
        await this.waitForResults;
        await this.selectFareClass.click();
    }

    async chooseFareType()
    {
        await this.selectFareType.click();
    }

    async noUpgradeFare()
    {
        await this.waitForPopupWindow;
        await this.upgradeFare.click();
    }

}


module.exports = {HomePage};