import {test, expect} from "@playwright/test";
import ContactPage from "../pages/contact.page";
import { faker } from '@faker-js/faker';

test.describe('Contact', () => {
    let contactPage: ContactPage;
    test('Filling Contact Form and verify success message', async ({ page }) => {
        contactPage = new ContactPage(page);
        //open url
        await contactPage.navigate();
        
        //click Contact button
        //await page.locator('#menu-item-493').click();

        //scroll until find Send Us Message
        await contactPage.scrolluntilFind();

        //fill in the Contact Form and Submit
        await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), 
        faker.phone.number(), faker.lorem.paragraphs(2));

        //add a soft assertion
        //await expect.soft(page.locator('#evf-277-field_yhGx3FOwr2-4')).toHaveText('Fail test')

        //verify thank you message appear
        await expect(contactPage.thankYouMessage).toBeVisible();
    })
    
})
