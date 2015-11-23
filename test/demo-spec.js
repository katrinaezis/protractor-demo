'use strict';

describe('The page has a title', function(){
    it('Should have a title defined', function() {
        browser.get('http://localhost:8080');
        var title = browser.getTitle();
        expect(title).toBeDefined();
    });
});

describe('There is an email input', function() {
    it('Should be an input element with model email', function() {
        var emailInput = element(by.model('email'));
        expect(emailInput).toBeDefined();
    });
});

// describe('I can sign in by putting in my email and password', function() {
//     it('Should let me log in with email test1@test.com and pw test', function() {
//         var emailInput = element(by.model('email'));
//         emailInput.sendKeys('test1@test.com');
//         var passwordInput = element(by.model('password'));
//         passwordInput.sendKeys('test');
//         var button = element(by.buttonText('Sign-in'));
//         button.click();
//     });
// });

describe('Sign-in button should be disabled if there is no input', function() {
    var button = element(by.buttonText('Sign-in'));
    it('Should be disabled when there is no email and password', function() {      
        expect(button.isEnabled()).toBe(false);
    });
    it('Should be enabled when there is an email and password', function() {
        var emailInput = element(by.model('email'));
        emailInput.sendKeys('test1@test.com');
        var passwordInput = element(by.model('password'));
        passwordInput.sendKeys('test');
        expect(button.isEnabled()).toBe(true);
    });
});

// //describe a "test suite" for a particular feature
// describe('Feature name', function() {

//    //some functionality the feature should have
//    it('should ...', function() {

//       //tell browser to do stuff and check for
//       //correct result here

//    });

// ));

// /* name suite and feature so that read as:
//    "{{Feature name}} should {{do something specific}}"
// */

// describe('Browser control', function() {
//    it('should show the correct title', function() {

//       //navigate browser to the given url
//       browser.get('http://localhost:8000');

//       //get the page title (do nothing with it yet)
//       browser.getTitle();

//    });
// ));