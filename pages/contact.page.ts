import {Page, Locator} from '@playwright/test';

class ContactPage {
    page: Page;
    usernameTextField: Locator;
    emailTextField: Locator;
    phoneNumberTextField: Locator;
    messageTextArea: Locator;
    submitButton: Locator;
    thankYouMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usernameTextField = page.locator('#evf-277-field_ys0GeZISRs-1')
        this.emailTextField = page.locator('#evf-277-field_LbH5NxasXM-2')
        this.phoneNumberTextField = page.locator('#evf-277-field_66FR384cge-3')
        this.messageTextArea = page.locator('#evf-277-field_yhGx3FOwr2-4')
        this.submitButton = page.locator('#evf-submit-277');
        this.thankYouMessage = page.locator('text=Thanks for contacting us! We will be in touch with you shortly');
    }

    async navigate() {
        await this.page.goto("/contact");
    }

    scrolluntilFind() {
        return this.page.getByText('Send Us Message').scrollIntoViewIfNeeded();
    }

    async submitForm(name: string, email: string, phone: string, message: string){
        await this.usernameTextField.fill(name);
        await this.emailTextField.fill(email);
        await this.phoneNumberTextField.fill(phone);
        await this.messageTextArea.fill(message);

        await this.page.waitForTimeout(5000);

        await this.submitButton.click();
    }

}

export default ContactPage;