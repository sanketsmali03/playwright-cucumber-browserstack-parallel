const { expect } = require("chai");
const { chromium } = require('playwright');



class Addbasket{

    
    async navigateToCheckoutPage(){
        
       await page.goto('https://checkout-api-devsite.vscommerce.co.uk/')
     console.log(await newURL.title())

    }

    async gotoMensSection(){
        console.log('im in mens')
        //await page.locator('#js-cookie_alert_button_accept').click();
        await page.locator('#site-header__nav__1 > li:nth-child(1)').hover();
      
    }

    async selectShoes(){
        await page.locator('//*[@id="site-header__nav__1"]/li[1]/div/div[2]/div/div/div/div/ul/li[1]/a/span').click();
        
    }

    async selectBrand(){
        await page.locator('#js-search-results-products__list > li:nth-child(2)').click({force: true});
        //await page.waitForTimeout(8000);
    }

    async selectLength() {
        const dropdown =  page.locator('#attributes-select-1');
        await dropdown.selectOption("23");

    }

    async selectColour(){
        const dropdown2 =  page.locator('#attributes-select-2');
        await dropdown2.selectOption("21");

        const dropdown3 =  page.locator('#attributes-select-3');
        await dropdown3.selectOption("8");
    }

    async selectAddtoBasket(){
        await page.locator('button#js-add-to-basket-button').click();

    }

    async verifiyItemAddtoBasket(){
        
        
        const text1 = await page.innerText('span.added-to-basket__title');
        await expect(text1).to.be.eql('Added to your bag -'); 
        

    }

    async checkOutButton(){
        await page.locator('a.button.added-to-basket__button.added-to-basket__button--checkout').click();

    }

    async checkoutAndPay(){
        await page.locator('text=Checkout & Pay').click();

    }

    async verifyPageUrl(){
       const URL = await page.url();
       await expect(URL).to.be.contain('login');

    }

    async pause(){
        await page.waitForTimeout(3000)

    }

    async basketLogin(userName, password){
        await page.locator('text=Email Address Password Show Hide Sign In >> input[type="email"]').click();
        // Fill text=Email Address Password Show Hide Sign In >> input[type="email"]
        await page.locator('text=Email Address Password Show Hide Sign In >> input[type="email"]').fill(userName);
        // Click input[type="password"]
        await page.locator('input[type="password"]').click();
        // Fill input[type="password"]
        await page.locator('input[type="password"]').fill(password);

    }

    async clickSignInButton(){
        // Click span:has-text("Sign In")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://checkout-api-devsite.vscommerce.co.uk/checkout/payment' }*/),
            page.locator('span:has-text("Sign In")').click()
            ]);

    }

    async verifyReviewPage(){
        //console.log(await page.innerText('checkout-template:nth-child(1) > h2:nth-child(1)'));
        const lg =  await page.innerText('checkout-template:nth-child(1) > h2:nth-child(1)');
        await expect(lg).to.be.contain('Review & Pay');
    }
  
}




    module.exports = { Addbasket }