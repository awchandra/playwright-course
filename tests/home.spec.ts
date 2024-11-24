import {test, expect} from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home", () => {
    let homePage: HomePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        //open url
        await homePage.navigate();
    })
    

    test("Click Get Started Button using CSS Selector", async ({ page }) => {
        await expect(page).not.toHaveURL(/.*#get-started/);

        //click the button
        await homePage.getStartedBtn.click();

        //verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    })
    test("Open Homepage and Verify Title", async ({ page }) => {

        //verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    })
    test('Verify Home Link is enabled using text and css selector', async ({ page }) => {

        //find the text locator
        //const homeText = await page.locator('#zak-primary-menu >> text=Home');
        const homeText = await homePage.homeText;

        //verify heading text is visible
        await expect(homeText).toBeEnabled();
    })
    
    test('Verify Heading Text is visible using text selector', async ({ page }) => {

        //find the text locator
        const headingText = await homePage.headingText;

        //verify heading text is visible
        await expect(headingText).toBeVisible();
    })

    test('Verify Course Button is visible using XPath selector', async ({ page }) => {

        //find the search Icon
        const courseButton = page.locator('//*[@id="zak-masthead"]/div/div/div/div[2]/div[2]/div/a');

        //verify search Icon is visible
        await expect(courseButton).toBeVisible();
    })

    test('Verify text of all nav links', async ({ page }) => {

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]

        //find the nav links
        //const navLinks = await homePage.navLinks;

        //print out all the links
        //for (const el of await navLinks.elementHandles()) {
        //    console.log(await el.textContent());
        //}

        //verify nav links is visible
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    })

})
