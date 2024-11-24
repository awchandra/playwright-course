import {test, expect} from "@playwright/test";
import CartPage from "../pages/cart.page";
import path from 'path';

test.describe('Upload File', () => {
    let cartPage: CartPage;
    const filename = ['dolphin.jpg', '3-mb-file.pdf'];

    for (const name of filename){
        test(`should upload a ${name} file`, async ({ page }) => {
            cartPage = new CartPage(page);
            //open url
            await page.goto("/cart");
    
            //store test file path
            const filePath = path.join(__dirname, `../data/${name}`);
    
            //upload test file
            await cartPage.uploadComponent().uploadFile(filePath);
    
            //assertion
            await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully', {timeout: 10000});
        })
    }
    
    test.skip('should upload a test file on a hidden input field', async ({ page }) => {
        //open url
        await page.goto("https://practice.sdetunicorns.com/cart/");

        //store test file path
        const filePath = path.join(__dirname, '../data/3-mb-file.pdf');

        //DOM Manipulation
        await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
                selector.className = '';
            }
        })

        //upload test file
        await page.setInputFiles('input#upfile_1', filePath);

        //click the submit button
        await page.locator('#upload_1').click();

        //wait for Condition
        //await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state: 'visible', timeout: 7000});

        //assertion
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully', {timeout: 10000});
    })
})
