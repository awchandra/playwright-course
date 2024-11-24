import {Page, Locator} from '@playwright/test';

class HomePage {
    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeText: Locator;
    navLinks: Locator;
    constructor(page: Page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started')
        this.headingText = page.locator('text=Think Different. Make Different.')
        this.homeText = page.locator('#zak-primary-menu >> text=Home')
        this.navLinks = page.locator('#zak-primary-menu li[id*=menu]')
    }

    async navigate() {
        await this.page.goto("/");
    }

    getNavLinksText() {
        return  this.navLinks.allTextContents();
    }

}

export default HomePage;