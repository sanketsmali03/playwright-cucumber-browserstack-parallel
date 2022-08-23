Feature: : add product to basket


    As a user 
    I want to add a product to basket 
    

    Scenario Outline: Adding product to the basket and login
        Given go to the baseUrl 
        When user hover-over the Mens tab in Site headers 
        Then user clicks on Shoes section 
        Then the user clicks on brand 
        Then user selects Size from select dropdown list
        Then user selects colour and length from select drop down list 
        When user clicks Add to Bag button 
        Then user verifies item is added to basket 
        When the user clicks on checkout button
        Then user clicks on checkout and pay 
        Then Verify the login page is displayed
        Then wait for 3 seconds 
        When the user enters "<userName>" and "<password>"
        Then wait for 3 seconds
        Then click on Sign in button 
        Then wait for 3 seconds
        Then user verifies the url contains payment 


        Examples:
            | userName | password | 
            | seethaiah.gamidi@visualsoft.co.uk  | xxxxxxxx | 



