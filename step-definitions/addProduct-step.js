const {Given, When, Then, defineStep} = require('@cucumber/cucumber')
const { Addbasket } = require('../page-objects/add-product')




const addbasket = new Addbasket()



Given('go to the baseUrl', {timeout: 60 * 1000},async function () {

  await page.goto('https://checkout-api-devsite.vscommerce.co.uk/')
    //await addbasket.navigateToCheckoutPage()

});

When('user hover-over the Mens tab in Site headers', async function () {
  // Write code here that turns the phrase above into concrete actions
  //await addbasket.gotoMensSection()
  //await page.locator('#js-cookie_alert_button_accept').click();
  await page.locator('#js-cookie_alert_button_accept').click();
  await page.locator('#site-header__nav__1 > li:nth-child(1)').hover();
});

Then('user clicks on Shoes section', async () => {
    await addbasket.selectShoes()

})

Then ('the user clicks on brand', async () => {

    await addbasket.selectBrand()

})

Then ('user selects Size from select dropdown list', async () => {
    await addbasket.selectLength()

})

Then('user selects colour and length from select drop down list', async () =>  {
    await addbasket.selectColour()
  });

  When ('user clicks Add to Bag button', async () => {
    await addbasket.selectAddtoBasket()

  })

  Then('user verifies item is added to basket', async () => {
    await addbasket.verifiyItemAddtoBasket()

  })

  When('the user clicks on checkout button', async () => {
    await addbasket.checkOutButton()


  })

  Then('user clicks on checkout and pay', async function () {
    await addbasket.checkoutAndPay()
  });

  Then ('Verify the login page is displayed', async () => {
    await addbasket.verifyPageUrl()

  })
  Then ('wait for 3 seconds', async () => {
    await addbasket.pause()

  })

  When(/^the user enters "([^"]*)" and "([^"]*)"$/, async function (userName, password) {
    await addbasket.basketLogin(userName, password)

  });

  Then('click on Sign in button', async function () {
    await addbasket.clickSignInButton()
    
  });

  Then('user verifies the url contains payment',  async function () {
    await addbasket.verifyReviewPage()
    
  });
