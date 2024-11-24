import {test, expect} from "@playwright/test";
import BlogPage from "../pages/blog.page";

test.describe('Blog', () => {
    let blogPage: BlogPage;
    test('Verify Recent Post count and verify the length of each list item', async ({ page }) => {
        blogPage = new BlogPage(page);
        //open url
        await blogPage.navigate();

        //click Blog button
        //await page.locator('#menu-item-490').click();

        //get the recent post list elements
        //const recentPostList = await blogPage.recentPostList;
        let postCount = 0;

        //loop through the list and assert the character length
        for (const el of await blogPage.recentPostList.elementHandles()) {
            expect((await el.textContent())?.length).toBeGreaterThan(10);
            postCount +=1;
        }

        //assert the total length of the list elements
        expect(postCount).toEqual(5);

    })
    
})
