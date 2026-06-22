import { Page } from '@playwright/test';
import { BasePage } from './base.page'

export class LoginPage extends BasePage {
  constructor(page: Page) {super(page)}

/*   private usernameInput = this.page.locator('#username');
  private passwordInput = this.page.locator('#password');
  private loginButton = this.page.locator('input[type="submit"]');

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  } */
}